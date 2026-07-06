/**
 * GitHub 魔法学院 — Interactive tutorial for beginners
 */

const LESSONS = [
  {
    emoji: "🌍",
    title: "GitHub 是什么？",
    analogy:
      "想象 GitHub 是一个<strong>超级大的在线文件夹</strong>。你在家里写作业（写代码），GitHub 帮你把作业存到云端，还能让同学一起看、一起改！",
    steps: [
      "Git = 记录每次修改的「时光机」",
      "Hub = 大家聚在一起的地方",
      "GitHub = 用时光机管理作品的云端平台",
    ],
    tip: "💡 全世界有上亿人在用 GitHub，很多开源游戏和 App 都托管在这里！",
    quiz: {
      question: "GitHub 最像什么？",
      options: [
        { text: "只能自己看的日记本", correct: false },
        { text: "可以分享和协作的在线作业本", correct: true },
        { text: "只能玩游戏的网站", correct: false },
      ],
      explain: "GitHub 可以保存、分享、协作修改项目，就像在线作业本！",
    },
  },
  {
    emoji: "🔑",
    title: "注册你的账号",
    analogy:
      "注册 GitHub 就像<strong>办理图书馆借书证</strong>。有了账号，你就有自己的「书架」（个人主页）啦！",
    steps: [
      "打开 github.com，点击 Sign up（注册）",
      "填邮箱、设密码、起用户名（像游戏昵称）",
      "验证邮箱，完成注册 🎉",
    ],
    tip: "💡 用户名以后很难改，选一个你喜欢又好记的名字！",
    code: `# 注册完成后，在电脑上设置你的名字（可选）
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"`,
    quiz: {
      question: "注册 GitHub 需要什么？",
      options: [
        { text: "只需要手机号", correct: false },
        { text: "邮箱和密码", correct: true },
        { text: "必须先会写代码", correct: false },
      ],
      explain: "只需要邮箱和密码就能注册，不会写代码也没关系！",
    },
  },
  {
    emoji: "📦",
    title: "仓库（Repository）",
    analogy:
      "仓库就是一个<strong>项目的文件夹</strong>。比如「我的画集」「科学小实验」「Python 小游戏」，每个项目一个仓库。",
    steps: [
      "Repository = Repo = 仓库 = 一个项目文件夹",
      "Public（公开）：全世界都能看到",
      "Private（私有）：只有你能看到（或邀请的人）",
    ],
    tip: "💡 新手建议先建 Public 仓库，方便学习和分享！",
    quiz: {
      question: "「仓库」是什么？",
      options: [
        { text: "放快递的地方", correct: false },
        { text: "存放一个项目的文件夹", correct: true },
        { text: "GitHub 的聊天室", correct: false },
      ],
      explain: "Repository（仓库）就是存放项目所有文件的地方！",
    },
  },
  {
    emoji: "✨",
    title: "创建第一个仓库",
    analogy:
      "创建仓库就像<strong>买一个新书包</strong>，然后往里面放课本（文件）。",
    steps: [
      "登录 GitHub，点右上角 + → New repository",
      "起名字，比如 my-first-project",
      "勾选 Add a README（加说明文件），点 Create",
    ],
    tip: "💡 README 是项目的「说明书」，告诉别人这个项目是干什么的。",
    quiz: {
      question: "创建仓库时，README 文件有什么用？",
      options: [
        { text: "用来存密码", correct: false },
        { text: "项目的说明书/介绍", correct: true },
        { text: "必须写代码才能创建", correct: false },
      ],
      explain: "README 就像项目封面上的介绍，告诉别人这是啥！",
    },
  },
  {
    emoji: "💾",
    title: "提交（Commit）",
    analogy:
      "Commit 就像<strong>给作品拍一张快照</strong>。今天画到哪了？拍一张！明天继续画，再拍一张。每次快照都有记录，随时可以回看。",
    steps: [
      "修改文件 = 动了你的作品",
      "git add = 选好要保存哪些改动",
      "git commit = 拍快照，写一句说明（比如「加了首页」）",
    ],
    tip: "💡 每次 commit 都要写清楚改了什么，以后找起来方便！",
    code: `git add .                    # 选中所有改动
git commit -m "我的第一次提交"  # 拍快照 + 写说明`,
    quiz: {
      question: "Commit（提交）是什么？",
      options: [
        { text: "删除所有文件", correct: false },
        { text: "给当前作品拍一张快照保存", correct: true },
        { text: "把项目送给别人", correct: false },
      ],
      explain: "Commit 就是保存当前版本的一个快照，可以随时回退！",
    },
  },
  {
    emoji: "☁️",
    title: "推送 & 拉取（Push / Pull）",
    analogy:
      "Push = <strong>把作业上传到云端</strong>（GitHub）。Pull = <strong>从云端下载最新版</strong>。就像云盘同步，但专门给代码用！",
    steps: [
      "Push（推送）：本地 → GitHub 云端",
      "Pull（拉取）：GitHub 云端 → 本地",
      "先 commit 再 push，顺序不能乱哦！",
    ],
    tip: "💡 团队合作时，开始工作前先 pull，避免冲突！",
    code: `git push origin main   # 推送到 GitHub
git pull origin main   # 拉取最新版本`,
    quiz: {
      question: "Push 是做什么的？",
      options: [
        { text: "从 GitHub 下载文件", correct: false },
        { text: "把本地改动上传到 GitHub", correct: true },
        { text: "删除远程仓库", correct: false },
      ],
      explain: "Push = 推送 = 上传本地改动到 GitHub！",
    },
  },
  {
    emoji: "🌿",
    title: "分支（Branch）",
    analogy:
      "分支就像<strong>平行世界</strong>！主世界（main）是正式版，你可以开一个分支试新功能，试好了再合并回来，不会弄坏正式版。",
    steps: [
      "main / master = 主分支（正式版）",
      "新建 branch = 开一个试验平行世界",
      "merge = 把试验成果合并回主分支",
    ],
    tip: "💡 改大功能前先开分支，这是程序员的好习惯！",
    code: `git checkout -b feature-新功能  # 创建并切换到新分支
git merge feature-新功能           # 合并回主分支`,
    quiz: {
      question: "为什么要用分支？",
      options: [
        { text: "让项目变复杂", correct: false },
        { text: "安全地试验新功能，不影响正式版", correct: true },
        { text: "分支不能合并", correct: false },
      ],
      explain: "分支让你安全实验，试好了再合并，主版本不会被弄坏！",
    },
  },
  {
    emoji: "📝",
    title: "Pull Request（合并请求）",
    analogy:
      "Pull Request（PR）就像<strong>交作业给老师批改</strong>。你说：「我改好了，请看看能不能合并进主项目！」",
    steps: [
      "在分支上完成修改并 push",
      "在 GitHub 上点 New Pull Request",
      "写清楚改了什么，等别人 review（审查）后合并",
    ],
    tip: "💡 开源项目里，给别人的项目提 PR 是很有成就感的事！",
    quiz: {
      question: "Pull Request 是做什么的？",
      options: [
        { text: "请求别人把你的改动合并进项目", correct: true },
        { text: "删除别人的代码", correct: false },
        { text: "下载整个 GitHub", correct: false },
      ],
      explain: "PR 就是「请合并我的改动」，是团队协作的核心！",
    },
  },
];

const FINAL_QUIZ = [
  {
    question: "GitHub 上的「仓库」是什么？",
    options: ["聊天群组", "存放项目的文件夹", "游戏排行榜"],
    correct: 1,
  },
  {
    question: "Commit 最准确的描述是？",
    options: ["删除文件", "保存当前版本的快照", "关闭电脑"],
    correct: 1,
  },
  {
    question: "正确的上传顺序是？",
    options: ["Push → Commit → 改文件", "改文件 → Commit → Push", "Commit → 改文件 → Push"],
    correct: 1,
  },
  {
    question: "Star ⭐ 按钮表示什么？",
    options: ["给项目点赞/收藏", "删除项目", "下载项目到电脑"],
    correct: 0,
  },
  {
    question: "Fork 是做什么的？",
    options: ["复制一份别人的仓库到自己账号下", "举报项目", "合并两个项目"],
    correct: 0,
  },
];

const state = {
  screen: "welcome",
  lessonIndex: 0,
  lessonsCompleted: new Set(),
  localFiles: [],
  cloudFiles: [],
  committed: false,
  finalAnswers: {},
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showScreen(name) {
  state.screen = name;
  $$(".screen").forEach((el) => {
    el.classList.toggle("active", el.dataset.screen === name);
  });
  updateProgress();
}

function updateProgress() {
  const total = LESSONS.length;
  let done = state.lessonsCompleted.size;

  if (state.screen === "playground" || state.screen === "quiz" || state.screen === "certificate") {
    done = total;
  }

  const label = state.screen === "certificate" ? "全部完成 🎉" : `进度 ${done} / ${total}`;
  $("#progress-label").textContent = label;

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

function renderLessonDots() {
  const nav = $("#lesson-dots");
  nav.innerHTML = LESSONS.map(
    (_, i) =>
      `<button class="lesson-dot ${i === state.lessonIndex ? "active" : ""} ${state.lessonsCompleted.has(i) ? "done" : ""}" data-lesson="${i}" aria-label="第 ${i + 1} 课"></button>`
  ).join("");
}

function renderLesson() {
  const lesson = LESSONS[state.lessonIndex];
  const container = $("#lesson-content");

  let html = `
    <div class="lesson-emoji">${lesson.emoji}</div>
    <h2>${lesson.title}</h2>
    <div class="lesson-analogy">${lesson.analogy}</div>
    <ol class="lesson-steps">
      ${lesson.steps.map((s, i) => `<li><span class="step-num">${i + 1}</span><span>${s}</span></li>`).join("")}
    </ol>
  `;

  if (lesson.code) {
    html += `
      <div class="code-block">
        <button class="code-copy" data-copy="${encodeURIComponent(lesson.code)}">复制</button>
        <pre>${escapeHtml(lesson.code)}</pre>
      </div>
    `;
  }

  html += `<div class="lesson-tip">${lesson.tip}</div>`;

  if (lesson.quiz) {
    html += `
      <div class="mini-quiz" data-quiz-id="lesson-${state.lessonIndex}">
        <h4>🧠 小测验：${lesson.quiz.question}</h4>
        <div class="quiz-options">
          ${lesson.quiz.options
            .map(
              (o, i) =>
                `<button class="quiz-btn" data-lesson-quiz="${state.lessonIndex}" data-opt="${i}" data-correct="${o.correct}">${o.text}</button>`
            )
            .join("")}
        </div>
        <p class="quiz-feedback" hidden></p>
      </div>
    `;
  }

  container.innerHTML = html;
  renderLessonDots();

  $("#btn-prev").disabled = state.lessonIndex === 0;
  $("#btn-next").textContent =
    state.lessonIndex === LESSONS.length - 1 ? "去练习场 🎮" : "下一课 →";
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function handleLessonQuiz(lessonIdx, optIdx, btn) {
  const lesson = LESSONS[lessonIdx];
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
    ? `✅ 答对了！${lesson.quiz.explain}`
    : `❌ 再想想～ ${lesson.quiz.explain}`;

  if (isCorrect) {
    state.lessonsCompleted.add(lessonIdx);
    renderLessonDots();
    updateProgress();
    showToast("🌟 太棒了！获得一颗星！");
  }
}

function renderFileList(containerId, files) {
  const el = $(containerId);
  if (files.length === 0) {
    el.innerHTML = '<p class="empty-hint">还没有文件…</p>';
    return;
  }
  el.innerHTML = files
    .map(
      (f) =>
        `<div class="file-item ${f.committed ? "committed" : ""}">📄 ${f.name}${f.committed ? " ✓" : ""}</div>`
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
  $("#status-log").innerHTML = "<p>💡 提示：先写文件，再保存快照，最后推送！</p>";
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
    logStatus("⚠ 文件已经够多啦！", "warn");
    return;
  }
  const name = available[Math.floor(Math.random() * available.length)];
  state.localFiles.push({ name, committed: false });
  state.committed = false;
  renderFileList("#local-files", state.localFiles);
  logStatus(`✏ 创建了文件: ${name}`, "ok");
}

function playCommit() {
  if (state.localFiles.length === 0) {
    logStatus("❌ 先创建一个文件吧！", "err");
    return;
  }
  state.localFiles.forEach((f) => {
    f.committed = true;
  });
  state.committed = true;
  renderFileList("#local-files", state.localFiles);
  logStatus('💾 Commit 成功！快照已保存："更新了项目文件"', "ok");
  showToast("💾 快照保存成功！");
}

function playPush() {
  if (!state.committed) {
    logStatus("❌ 请先 Commit 保存快照，再 Push！", "err");
    return;
  }
  state.cloudFiles = state.localFiles.map((f) => ({ ...f }));
  renderFileList("#cloud-files", state.cloudFiles);
  logStatus("☁ Push 成功！文件已上传到 GitHub", "ok");
  showToast("☁ 上传成功！");
  fireConfetti();
}

function playPull() {
  if (state.cloudFiles.length === 0) {
    logStatus("❌ 云端还没有文件，先 Push 吧！", "err");
    return;
  }
  state.localFiles = state.cloudFiles.map((f) => ({ ...f }));
  renderFileList("#local-files", state.localFiles);
  logStatus("⬇ Pull 成功！已同步云端最新版本", "ok");
  showToast("⬇ 同步成功！");
}

function renderFinalQuiz() {
  const container = $("#quiz-container");
  container.innerHTML = FINAL_QUIZ.map(
    (q, qi) => `
    <div class="quiz-question" data-q="${qi}">
      <h3>第 ${qi + 1} 题：${q.question}</h3>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, oi) =>
              `<button class="quiz-btn" data-final-q="${qi}" data-final-o="${oi}">${opt}</button>`
          )
          .join("")}
      </div>
    </div>
  `
  ).join("");
  state.finalAnswers = {};
  $("#btn-submit-quiz").hidden = true;
}

function submitFinalQuiz() {
  const answered = Object.keys(state.finalAnswers).length;
  if (answered < FINAL_QUIZ.length) {
    showToast(`还有 ${FINAL_QUIZ.length - answered} 题没答哦！`);
    return;
  }

  let score = 0;
  FINAL_QUIZ.forEach((q, i) => {
    if (state.finalAnswers[i] === q.correct) score++;
  });

  $("#cert-score").textContent = `得分：${score} / ${FINAL_QUIZ.length}`;
  showScreen("certificate");
  fireConfetti();

  if (score === FINAL_QUIZ.length) {
    showToast("🏆 满分！你是 GitHub 小天才！");
  } else if (score >= 4) {
    showToast("🎓 恭喜毕业！");
  } else {
    showToast("继续加油，再学一遍一定能行！");
  }
}

function fireConfetti() {
  const canvas = $("#confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#6c63ff", "#ff6b9d", "#ffd93d", "#2ecc71", "#74b9ff"];
  const particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: -20,
    r: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 2,
    angle: Math.random() * Math.PI * 2,
    spin: Math.random() * 0.2 - 0.1,
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.y += p.speed;
      p.x += Math.sin(p.angle) * 2;
      p.angle += p.spin;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

function init() {
  showScreen("welcome");
  renderLessonDots();

  document.body.addEventListener("click", (e) => {
    const target = e.target.closest("[data-action]");
    if (target) {
      const action = target.dataset.action;
      if (action === "start") {
        showScreen("lesson");
        renderLesson();
      } else if (action === "to-quiz") {
        renderFinalQuiz();
        showScreen("quiz");
      } else if (action === "restart") {
        state.lessonsCompleted = new Set();
        state.lessonIndex = 0;
        resetPlayground();
        showScreen("welcome");
      }
    }

    if (e.target.closest("[data-copy]")) {
      const btn = e.target.closest("[data-copy]");
      const text = decodeURIComponent(btn.dataset.copy);
      navigator.clipboard.writeText(text).then(() => showToast("📋 已复制到剪贴板！"));
    }

    if (e.target.closest("[data-lesson-quiz]")) {
      const btn = e.target.closest("[data-lesson-quiz]");
      if (btn.disabled) return;
      handleLessonQuiz(parseInt(btn.dataset.lessonQuiz, 10), parseInt(btn.dataset.opt, 10), btn);
    }

    if (e.target.closest("[data-lesson]")) {
      state.lessonIndex = parseInt(e.target.closest("[data-lesson]").dataset.lesson, 10);
      renderLesson();
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
        feedback.textContent = "✅ 正确！写文件 → Commit → Push，记住这个顺序！";
        showToast("🎯 顺序答对了！");
      } else {
        feedback.className = "quiz-feedback error";
        feedback.textContent = "❌ 不对哦～ 要先写文件，再 Commit 拍快照，最后 Push 上传！";
      }
    }

    if (e.target.closest("[data-final-q]")) {
      const btn = e.target.closest("[data-final-q]");
      const qi = parseInt(btn.dataset.finalQ, 10);
      const oi = parseInt(btn.dataset.finalO, 10);
      state.finalAnswers[qi] = oi;

      btn.closest(".quiz-options").querySelectorAll(".quiz-btn").forEach((b) => {
        b.classList.remove("correct");
      });
      btn.classList.add("correct");

      if (Object.keys(state.finalAnswers).length === FINAL_QUIZ.length) {
        $("#btn-submit-quiz").hidden = false;
      }
    }
  });

  $("#btn-prev").addEventListener("click", () => {
    if (state.lessonIndex > 0) {
      state.lessonIndex--;
      renderLesson();
    }
  });

  $("#btn-next").addEventListener("click", () => {
    if (state.lessonIndex < LESSONS.length - 1) {
      state.lessonIndex++;
      renderLesson();
    } else {
      resetPlayground();
      showScreen("playground");
    }
  });

  $("#btn-submit-quiz").addEventListener("click", submitFinalQuiz);
}

document.addEventListener("DOMContentLoaded", init);
