/**
 * GitHub Magic Academy — Interactive tutorial
 */

const state = {
  lang: localStorage.getItem("gha-lang") || (navigator.language.startsWith("zh") ? "zh" : "en"),
  screen: "welcome",
  lessonIndex: 0,
  lessonsCompleted: new Set(),
  localFiles: [],
  cloudFiles: [],
  committed: false,
  finalAnswers: {},
  interactiveStep: 0,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function t(key, ...args) {
  const val = I18N[state.lang][key];
  return typeof val === "function" ? val(...args) : val;
}

function lessons() {
  return getLessons(state.lang);
}

function finalQuiz() {
  return getFinalQuiz(state.lang);
}

function showScreen(name) {
  state.screen = name;
  $$(".screen").forEach((el) => {
    el.classList.toggle("active", el.dataset.screen === name);
  });
  updateProgress();
  triggerScreenAnimation();
}

function triggerScreenAnimation() {
  const active = $(".screen.active");
  if (!active) return;
  active.querySelectorAll(".slide-up").forEach((el, i) => {
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
    el.style.animationDelay = `${i * 0.08}s`;
  });
}

function updateProgress() {
  const total = lessons().length;
  let done = state.lessonsCompleted.size;

  if (["playground", "quiz", "certificate"].includes(state.screen)) {
    done = total;
  }

  $("#progress-label").textContent =
    state.screen === "certificate" ? t("progressDone") : t("progress", done, total);

  const pct = state.screen === "certificate" ? 100 : (done / total) * 100;
  $("#progress-fill").style.width = `${pct}%`;
  $(".progress-bar").setAttribute("aria-valuenow", String(done));
}

function showToast(msg) {
  const toast = $("#toast");
  toast.textContent = msg;
  toast.hidden = false;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.hidden = true;
    }, 300);
  }, 2500);
}

function applyStaticI18n() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.title =
    state.lang === "zh"
      ? "GitHub 魔法学院 — 小学生也能学会！"
      : "GitHub Magic Academy — Easy for Everyone!";

  $("#site-title").textContent = t("siteTitle");
  $("#site-subtitle").textContent = t("siteSubtitle");
  $("#btn-lang").textContent = t("langToggle");
  $("#welcome-title").textContent = t("welcomeTitle");
  $("#welcome-lead").innerHTML = t("welcomeLead");
  $("#hero-tags").innerHTML = `
    <span class="tag wiggle">${t("tagEasy")}</span>
    <span class="tag wiggle">${t("tagFun")}</span>
    <span class="tag wiggle">${t("tagReward")}</span>`;
  $("#start-btn").textContent = t("startBtn");

  $("#help-toggle").textContent = t("helpToggle");
  $("#help-title").textContent = t("helpTitle");
  $("#help-why").textContent = t("helpWhy");
  $("#help-reason").innerHTML = t("helpReason");
  $("#help-steps-title").textContent = t("helpStepsTitle");
  $("#help-step1-title").textContent = t("helpStep1Title");
  $("#help-step1").innerHTML = t("helpStep1");
  $("#help-step2-title").textContent = t("helpStep2Title");
  $("#help-step2").innerHTML = t("helpStep2");
  $("#help-step3-title").textContent = t("helpStep3Title");
  $("#help-step3").innerHTML = t("helpStep3");

  $("#pg-title").textContent = t("playgroundTitle");
  $("#pg-subtitle").textContent = t("playgroundSubtitle");
  $("#pg-local").textContent = t("localPanel");
  $("#pg-cloud").textContent = t("cloudPanel");
  $("#pg-create-file").textContent = t("createFile");
  $("#pg-commit").textContent = t("commitBtn");
  $("#pg-push").textContent = t("pushBtn");
  $("#pg-pull").textContent = t("pullBtn");
  $("#order-quiz-title").textContent = t("orderQuizTitle");
  $("#order-opt1").textContent = t("orderOpt1");
  $("#order-opt2").textContent = t("orderOpt2");
  $("#order-opt3").textContent = t("orderOpt3");
  $("#to-quiz-btn").textContent = t("toQuiz");
  $("#quiz-title").textContent = t("quizTitle");
  $("#quiz-subtitle").textContent = t("quizSubtitle");
  $("#btn-submit-quiz").textContent = t("submitQuiz");
  $("#cert-title").textContent = t("certTitle");
  $("#cert-text").innerHTML = t("certText");
  $("#cert-stamps").innerHTML = `
    <span>${t("certStamp1")}</span>
    <span>${t("certStamp2")}</span>
    <span>${t("certStamp3")}</span>
    <span>${t("certStamp4")}</span>`;
  $("#restart-btn").textContent = t("restart");
  $("#open-github-btn").textContent = t("openGithub");
  $("#btn-prev").textContent = t("prevLesson");

  if (state.screen === "lesson") renderLesson();
  if (state.screen === "quiz") renderFinalQuiz();
  updateProgress();
}

function renderLessonDots() {
  const nav = $("#lesson-dots");
  nav.innerHTML = lessons()
    .map(
      (_, i) =>
        `<button class="lesson-dot ${i === state.lessonIndex ? "active" : ""} ${state.lessonsCompleted.has(i) ? "done" : ""}" data-lesson="${i}" aria-label="${t("lessonDot", i + 1)}"></button>`
    )
    .join("");
}

function renderInteractiveDemo() {
  const steps = getInteractiveSteps(state.lang);
  const current = steps[state.interactiveStep];
  const isLast = state.interactiveStep >= steps.length - 1;

  const progressPct = ((state.interactiveStep + 1) / steps.length) * 100;

  return `
    <div class="interactive-demo">
      <h4>${t("interactiveTitle")}</h4>
      <div class="mock-browser">
        <div class="mock-bar">
          <span class="mock-dot red"></span>
          <span class="mock-dot yellow"></span>
          <span class="mock-dot green"></span>
          <span class="mock-url">github.com</span>
        </div>
        <div class="mock-body scene-${current.scene} pop-in">
          <div class="mock-ui">${current.mock}</div>
          ${renderMockScene(current.scene)}
        </div>
      </div>
      <div class="interactive-progress">
        <div class="interactive-progress-fill" style="width:${progressPct}%"></div>
      </div>
      <p class="interactive-label">${current.label}</p>
      <div class="interactive-actions">
        <button class="btn btn-small" data-interactive="prev" ${state.interactiveStep === 0 ? "disabled" : ""}>←</button>
        <button class="btn btn-primary btn-small glow" data-interactive="next">
          ${isLast ? t("interactiveDone") : t("interactiveNext")}
        </button>
        <button class="btn btn-ghost btn-small" data-interactive="reset">${t("interactiveReset")}</button>
      </div>
    </div>`;
}

function renderMockScene(scene) {
  const zh = state.lang === "zh";
  const scenes = {
    login: `<div class="mock-btn">${zh ? "Sign in" : "Sign in"}</div>`,
    new: `<div class="mock-menu">+ → <strong>New repository</strong></div>`,
    form: `<div class="mock-form">
      <div class="mock-field"><label>Repository name</label><input readonly value="my-first-project" /></div>
      <div class="mock-check">✅ Add a README file</div>
      <div class="mock-radio">◉ Public</div>
    </div>`,
    create: `<div class="mock-btn green">${zh ? "Create repository" : "Create repository"}</div>`,
    repo: `<div class="mock-files"><span>📄 README.md</span></div>`,
    addfile: `<div class="mock-files"><span>📄 README.md</span><span class="new-file">📄 hello.txt ✨</span></div>`,
    commit: `<div class="mock-commit">${zh ? "Commit changes" : "Commit changes"}</div>`,
    share: `<div class="mock-link">🔗 github.com/you/my-first-project</div>`,
  };
  return scenes[scene] || "";
}

function renderLesson() {
  const lesson = lessons()[state.lessonIndex];
  const container = $("#lesson-content");

  let html = `
    <div class="lesson-emoji bounce-in">${lesson.emoji}</div>
    <h2>${lesson.title}</h2>
    <div class="lesson-analogy">${lesson.analogy}</div>
    <ol class="lesson-steps">
      ${lesson.steps
        .map(
          (s, i) =>
            `<li class="step-reveal" style="animation-delay:${i * 0.06}s"><span class="step-num">${i + 1}</span><span>${s}</span></li>`
        )
        .join("")}
    </ol>
  `;

  if (lesson.detailedSteps) {
    html += `<h4 class="detailed-title">${t("detailedSteps")}</h4>
    <div class="detailed-grid">
      ${lesson.detailedSteps
        .map(
          (d, i) =>
            `<div class="detailed-card step-reveal" style="animation-delay:${i * 0.08}s">
              <span class="detailed-icon">${d.icon}</span>
              <strong>${d.title}</strong>
              <p>${d.desc}</p>
            </div>`
        )
        .join("")}
    </div>`;
  }

  if (lesson.interactive) {
    state.interactiveStep = state.interactiveStep || 0;
    html += renderInteractiveDemo();
  }

  if (lesson.code) {
    html += `
      <div class="code-block">
        <button class="code-copy" data-copy="${encodeURIComponent(lesson.code)}">${t("copy")}</button>
        <pre>${escapeHtml(lesson.code)}</pre>
      </div>`;
  }

  html += `<div class="lesson-tip">${lesson.tip}</div>`;

  if (lesson.quiz) {
    html += `
      <div class="mini-quiz">
        <h4>${t("miniQuiz")}${lesson.quiz.question}</h4>
        <div class="quiz-options">
          ${lesson.quiz.options
            .map(
              (o, i) =>
                `<button class="quiz-btn" data-lesson-quiz="${state.lessonIndex}" data-opt="${i}" data-correct="${o.correct}">${o.text}</button>`
            )
            .join("")}
        </div>
        <p class="quiz-feedback" hidden></p>
      </div>`;
  }

  container.innerHTML = html;
  renderLessonDots();

  $("#btn-prev").disabled = state.lessonIndex === 0;
  $("#btn-next").textContent =
    state.lessonIndex === lessons().length - 1 ? t("toPlayground") : t("nextLesson");
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function handleLessonQuiz(lessonIdx, btn) {
  const lesson = lessons()[lessonIdx];
  const isCorrect = btn.dataset.correct === "true";
  const feedback = btn.closest(".mini-quiz").querySelector(".quiz-feedback");

  btn.closest(".quiz-options").querySelectorAll(".quiz-btn").forEach((b) => {
    b.disabled = true;
    if (b.dataset.correct === "true") b.classList.add("correct");
    else if (b === btn && !isCorrect) b.classList.add("wrong");
  });

  feedback.hidden = false;
  feedback.className = `quiz-feedback ${isCorrect ? "success" : "error"}`;
  feedback.textContent = isCorrect
    ? t("quizCorrect", lesson.quiz.explain)
    : t("quizWrong", lesson.quiz.explain);

  if (isCorrect) {
    state.lessonsCompleted.add(lessonIdx);
    renderLessonDots();
    updateProgress();
    showToast(t("starToast"));
    fireConfetti(40);
  }
}

function renderFileList(containerId, files) {
  const el = $(containerId);
  if (files.length === 0) {
    el.innerHTML = `<p class="empty-hint">${t("noFiles")}</p>`;
    return;
  }
  el.innerHTML = files
    .map(
      (f) =>
        `<div class="file-item pop-in ${f.committed ? "committed" : ""}">📄 ${f.name}${f.committed ? " ✓" : ""}</div>`
    )
    .join("");
}

function logStatus(msg, type = "") {
  const log = $("#status-log");
  const p = document.createElement("p");
  p.className = type;
  p.textContent = msg;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
}

function resetPlayground() {
  state.localFiles = [];
  state.cloudFiles = [];
  state.committed = false;
  renderFileList("#local-files", state.localFiles);
  renderFileList("#cloud-files", state.cloudFiles);
  $("#status-log").innerHTML = `<p>${t("logHint")}</p>`;
  $("#order-feedback").hidden = true;
  $$("#order-quiz .quiz-btn").forEach((b) => {
    b.disabled = false;
    b.classList.remove("correct", "wrong");
  });
}

function playCreateFile() {
  const names = ["hello.txt", "index.html", "game.py", "README.md", "style.css"];
  const used = state.localFiles.map((f) => f.name);
  const available = names.filter((n) => !used.includes(n));
  if (available.length === 0) {
    logStatus(t("tooManyFiles"), "warn");
    return;
  }
  const name = available[Math.floor(Math.random() * available.length)];
  state.localFiles.push({ name, committed: false });
  state.committed = false;
  renderFileList("#local-files", state.localFiles);
  logStatus(t("createFileLog", name), "ok");
  $("#local-folder").classList.add("shake");
  setTimeout(() => $("#local-folder").classList.remove("shake"), 500);
}

function playCommit() {
  if (state.localFiles.length === 0) {
    logStatus(t("needFile"), "err");
    return;
  }
  state.localFiles.forEach((f) => {
    f.committed = true;
  });
  state.committed = true;
  renderFileList("#local-files", state.localFiles);
  logStatus(t("commitLog"), "ok");
  showToast(t("commitToast"));
}

function playPush() {
  if (!state.committed) {
    logStatus(t("needCommit"), "err");
    return;
  }
  state.cloudFiles = state.localFiles.map((f) => ({ ...f }));
  renderFileList("#cloud-files", state.cloudFiles);
  logStatus(t("pushLog"), "ok");
  showToast(t("pushToast"));
  $("#cloud-folder").classList.add("glow-border");
  setTimeout(() => $("#cloud-folder").classList.remove("glow-border"), 800);
  fireConfetti(60);
}

function playPull() {
  if (state.cloudFiles.length === 0) {
    logStatus(t("needPush"), "err");
    return;
  }
  state.localFiles = state.cloudFiles.map((f) => ({ ...f }));
  renderFileList("#local-files", state.localFiles);
  logStatus(t("pullLog"), "ok");
  showToast(t("pullToast"));
}

function renderFinalQuiz() {
  const container = $("#quiz-container");
  container.innerHTML = finalQuiz()
    .map(
      (q, qi) => `
    <div class="quiz-question slide-up" data-q="${qi}" style="animation-delay:${qi * 0.06}s">
      <h3>${t("questionN", qi + 1, q.question)}</h3>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, oi) =>
              `<button class="quiz-btn" data-final-q="${qi}" data-final-o="${oi}">${opt}</button>`
          )
          .join("")}
      </div>
    </div>`
    )
    .join("");
  state.finalAnswers = {};
  $("#btn-submit-quiz").hidden = true;
}

function submitFinalQuiz() {
  const fq = finalQuiz();
  const answered = Object.keys(state.finalAnswers).length;
  if (answered < fq.length) {
    showToast(t("unanswered", fq.length - answered));
    return;
  }

  let score = 0;
  fq.forEach((q, i) => {
    if (state.finalAnswers[i] === q.correct) score++;
  });

  $("#cert-score").textContent = t("score", score, fq.length);
  showScreen("certificate");
  fireConfetti(100);

  if (score === fq.length) showToast(t("perfectToast"));
  else if (score >= 4) showToast(t("gradToast"));
  else showToast(t("keepGoingToast"));
}

function fireConfetti(count = 80) {
  const canvas = $("#confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#6c63ff", "#ff6b9d", "#ffd93d", "#2ecc71", "#74b9ff"];
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * 100,
    r: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 2,
    angle: Math.random() * Math.PI * 2,
    spin: Math.random() * 0.2 - 0.1,
    shape: Math.random() > 0.5 ? "circle" : "rect",
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.y += p.speed;
      p.x += Math.sin(p.angle) * 2;
      p.angle += p.spin;
      ctx.fillStyle = p.color;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      }
      ctx.restore();
    });
    frame++;
    if (frame < 140) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

function toggleLang() {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem("gha-lang", state.lang);
  state.interactiveStep = 0;
  applyStaticI18n();
  if (state.screen === "playground") resetPlayground();
}

function handleInteractive(action) {
  const steps = getInteractiveSteps(state.lang);
  if (action === "next") {
    if (state.interactiveStep < steps.length - 1) {
      state.interactiveStep++;
      if (state.interactiveStep === steps.length - 1) fireConfetti(30);
    } else {
      showToast(t("interactiveDone"));
      fireConfetti(50);
    }
  } else if (action === "prev" && state.interactiveStep > 0) {
    state.interactiveStep--;
  } else if (action === "reset") {
    state.interactiveStep = 0;
  }
  renderLesson();
}

function init() {
  applyStaticI18n();
  showScreen("welcome");
  renderLessonDots();

  $("#btn-lang").addEventListener("click", toggleLang);

  document.body.addEventListener("click", (e) => {
    const actionEl = e.target.closest("[data-action]");
    if (actionEl) {
      const action = actionEl.dataset.action;
      if (action === "start") {
        showScreen("lesson");
        renderLesson();
      } else if (action === "to-quiz") {
        renderFinalQuiz();
        showScreen("quiz");
      } else if (action === "restart") {
        state.lessonsCompleted = new Set();
        state.lessonIndex = 0;
        state.interactiveStep = 0;
        resetPlayground();
        showScreen("welcome");
      }
    }

    if (e.target.closest("[data-copy]")) {
      const btn = e.target.closest("[data-copy]");
      navigator.clipboard
        .writeText(decodeURIComponent(btn.dataset.copy))
        .then(() => showToast(t("copyToast")));
    }

    if (e.target.closest("[data-lesson-quiz]")) {
      const btn = e.target.closest("[data-lesson-quiz]");
      if (btn.disabled) return;
      handleLessonQuiz(parseInt(btn.dataset.lessonQuiz, 10), btn);
    }

    if (e.target.closest("[data-lesson]")) {
      state.lessonIndex = parseInt(e.target.closest("[data-lesson]").dataset.lesson, 10);
      state.interactiveStep = 0;
      renderLesson();
    }

    if (e.target.closest("[data-interactive]")) {
      handleInteractive(e.target.closest("[data-interactive]").dataset.interactive);
    }

    if (e.target.closest("[data-play]")) {
      const play = e.target.closest("[data-play]").dataset.play;
      if (play === "create-file") playCreateFile();
      else if (play === "commit") playCommit();
      else if (play === "push") playPush();
      else if (play === "pull") playPull();
    }

    if (e.target.closest("#order-quiz .quiz-btn")) {
      const btn = e.target.closest(".quiz-btn");
      if (btn.disabled) return;
      const feedback = $("#order-feedback");
      $$("#order-quiz .quiz-btn").forEach((b) => {
        b.disabled = true;
        if (b.dataset.answer === "correct") b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
      });
      feedback.hidden = false;
      if (btn.dataset.answer === "correct") {
        feedback.className = "quiz-feedback success";
        feedback.textContent = t("orderCorrect");
        showToast(t("orderToast"));
        fireConfetti(30);
      } else {
        feedback.className = "quiz-feedback error";
        feedback.textContent = t("orderWrong");
      }
    }

    if (e.target.closest("[data-final-q]")) {
      const btn = e.target.closest("[data-final-q]");
      state.finalAnswers[parseInt(btn.dataset.finalQ, 10)] = parseInt(btn.dataset.finalO, 10);
      btn.closest(".quiz-options").querySelectorAll(".quiz-btn").forEach((b) => b.classList.remove("correct"));
      btn.classList.add("correct");
      if (Object.keys(state.finalAnswers).length === finalQuiz().length) {
        $("#btn-submit-quiz").hidden = false;
      }
    }
  });

  $("#btn-prev").addEventListener("click", () => {
    if (state.lessonIndex > 0) {
      state.lessonIndex--;
      state.interactiveStep = 0;
      renderLesson();
    }
  });

  $("#btn-next").addEventListener("click", () => {
    if (state.lessonIndex < lessons().length - 1) {
      state.lessonIndex++;
      state.interactiveStep = 0;
      renderLesson();
    } else {
      resetPlayground();
      showScreen("playground");
    }
  });

  $("#btn-submit-quiz").addEventListener("click", submitFinalQuiz);
}

document.addEventListener("DOMContentLoaded", init);
