/**
 * Bilingual strings for GitHub Magic Academy
 */
const I18N = {
  zh: {
    siteTitle: "GitHub 魔法学院",
    siteSubtitle: "一步一步，轻松学会",
    progress: (done, total) => `进度 ${done} / ${total}`,
    progressDone: "全部完成 🎉",
    welcomeTitle: "你好，小魔法师！",
    welcomeLead:
      "GitHub 是一个<strong>存放代码和作品</strong>的超级大仓库。<br />就像班级里的<strong>公共作业本</strong>，你可以保存、分享、一起修改项目！",
    tagEasy: "🎮 不用怕",
    tagFun: "🌈 超好玩",
    tagReward: "⭐ 有奖励",
    startBtn: "开始冒险 →",
    prevLesson: "← 上一课",
    nextLesson: "下一课 →",
    toPlayground: "去练习场 🎮",
    playgroundTitle: "🎮 动手练习场",
    playgroundSubtitle: "点击按钮，模拟真实的 GitHub 操作！",
    localPanel: "📁 你的电脑（本地）",
    cloudPanel: "☁️ GitHub 云端",
    emptyLocal: "文件夹是空的…",
    emptyCloud: "还没有上传…",
    createFile: "✏️ 写一个新文件",
    commitBtn: "💾 保存快照 (commit)",
    pushBtn: "推送 Push ↑",
    pullBtn: "拉取 Pull ↓",
    logHint: "💡 提示：先写文件，再保存快照，最后推送！",
    orderQuizTitle: "🧠 小测验：正确的顺序是？",
    orderOpt1: "Push → 写文件 → Commit",
    orderOpt2: "写文件 → Commit → Push",
    orderOpt3: "Commit → Push → 写文件",
    orderCorrect: "✅ 正确！写文件 → Commit → Push，记住这个顺序！",
    orderWrong: "❌ 不对哦～ 要先写文件，再 Commit 拍快照，最后 Push 上传！",
    toQuiz: "去毕业考试 →",
    quizTitle: "🎓 毕业考试",
    quizSubtitle: "答对 4 题就能拿到 GitHub 小魔法师证书！",
    submitQuiz: "交卷看成绩",
    certTitle: "GitHub 小魔法师",
    certText: "你已经学会了 GitHub 的基础知识！<br />继续练习，你也能做出超酷的项目！",
    certStamp1: "⭐ 仓库",
    certStamp2: "💾 提交",
    certStamp3: "☁️ 推送",
    certStamp4: "🔀 分支",
    restart: "再学一遍",
    openGithub: "打开真正的 GitHub →",
    copy: "复制",
    miniQuiz: "🧠 小测验：",
    quizCorrect: (explain) => `✅ 答对了！${explain}`,
    quizWrong: (explain) => `❌ 再想想～ ${explain}`,
    starToast: "🌟 太棒了！获得一颗星！",
    copyToast: "📋 已复制到剪贴板！",
    commitToast: "💾 快照保存成功！",
    pushToast: "☁ 上传成功！",
    pullToast: "⬇ 同步成功！",
    orderToast: "🎯 顺序答对了！",
    score: (s, t) => `得分：${s} / ${t}`,
    perfectToast: "🏆 满分！你是 GitHub 小天才！",
    gradToast: "🎓 恭喜毕业！",
    keepGoingToast: "继续加油，再学一遍一定能行！",
    unanswered: (n) => `还有 ${n} 题没答哦！`,
    lessonDot: (n) => `第 ${n} 课`,
    questionN: (n, q) => `第 ${n} 题：${q}`,
    noFiles: "还没有文件…",
    tooManyFiles: "⚠ 文件已经够多啦！",
    createFileLog: (name) => `✏ 创建了文件: ${name}`,
    needFile: "❌ 先创建一个文件吧！",
    commitLog: '💾 Commit 成功！快照已保存："更新了项目文件"',
    needCommit: "❌ 请先 Commit 保存快照，再 Push！",
    pushLog: "☁ Push 成功！文件已上传到 GitHub",
    needPush: "❌ 云端还没有文件，先 Push 吧！",
    pullLog: "⬇ Pull 成功！已同步云端最新版本",
    helpTitle: "📱 手机打不开？看这里！",
    helpWhy: "为什么手机访问 localhost 不行？",
    helpReason:
      "<strong>localhost =「这台设备自己」</strong>。你在手机上输入 localhost，手机会在<strong>自己</strong>里找网页，而网页其实在<strong>电脑上</strong>运行，所以 Safari 会报「无法连接服务器」。",
    helpStepsTitle: "正确做法（3 选 1）",
    helpStep1Title: "方法一：同一 WiFi，用电脑 IP",
    helpStep1:
      "1. 电脑和手机连<strong>同一个 WiFi</strong><br />2. 在电脑上运行：<code>python3 -m http.server 8080 --bind 0.0.0.0</code><br />3. 查电脑 IP（Mac：系统设置 → 网络；Windows：ipconfig）<br />4. 手机浏览器输入：<strong>http://电脑IP:8080</strong>（例如 http://192.168.1.5:8080）",
    helpStep2Title: "方法二：最简单 — 直接打开文件",
    helpStep2:
      "把整个 <code>github-tutorial</code> 文件夹发到手机（微信/邮件/网盘），用文件管理器打开 <code>index.html</code>。不需要服务器！",
    helpStep3Title: "方法三：部署到 GitHub Pages",
    helpStep3:
      "把项目 push 到 GitHub，开启 Pages，用手机访问 <strong>https://你的用户名.github.io/项目名</strong>，随时随地都能学！",
    helpToggle: "📱 手机访问指南",
    langToggle: "EN",
    detailedSteps: "📋 详细步骤",
    tryInteractive: "👆 点我一步步模拟",
    interactiveTitle: "互动模拟：创建第一个项目",
    interactiveNext: "下一步",
    interactiveDone: "完成！🎉",
    interactiveReset: "重新演示",
  },
  en: {
    siteTitle: "GitHub Magic Academy",
    siteSubtitle: "Learn step by step, the easy way",
    progress: (done, total) => `Progress ${done} / ${total}`,
    progressDone: "All done 🎉",
    welcomeTitle: "Hey, little wizard!",
    welcomeLead:
      "GitHub is a <strong>huge online home</strong> for code and projects.<br />Think of it like a <strong>shared class notebook</strong> — save, share, and build together!",
    tagEasy: "🎮 No fear",
    tagFun: "🌈 Super fun",
    tagReward: "⭐ Rewards",
    startBtn: "Start adventure →",
    prevLesson: "← Previous",
    nextLesson: "Next →",
    toPlayground: "Go to playground 🎮",
    playgroundTitle: "🎮 Hands-on Playground",
    playgroundSubtitle: "Click buttons to simulate real GitHub actions!",
    localPanel: "📁 Your computer (local)",
    cloudPanel: "☁️ GitHub cloud",
    emptyLocal: "Folder is empty…",
    emptyCloud: "Nothing uploaded yet…",
    createFile: "✏️ Write a new file",
    commitBtn: "💾 Save snapshot (commit)",
    pushBtn: "Push ↑",
    pullBtn: "Pull ↓",
    logHint: "💡 Tip: write file → commit → push!",
    orderQuizTitle: "🧠 Quiz: What's the correct order?",
    orderOpt1: "Push → write file → Commit",
    orderOpt2: "Write file → Commit → Push",
    orderOpt3: "Commit → Push → write file",
    orderCorrect: "✅ Correct! Write file → Commit → Push — remember this order!",
    orderWrong: "❌ Not quite — write file first, then Commit, then Push!",
    toQuiz: "Final exam →",
    quizTitle: "🎓 Graduation Exam",
    quizSubtitle: "Score 4+ to earn your GitHub Wizard certificate!",
    submitQuiz: "Submit & see score",
    certTitle: "GitHub Little Wizard",
    certText: "You've learned GitHub basics!<br />Keep practicing — you can build cool projects too!",
    certStamp1: "⭐ Repo",
    certStamp2: "💾 Commit",
    certStamp3: "☁️ Push",
    certStamp4: "🔀 Branch",
    restart: "Learn again",
    openGithub: "Open real GitHub →",
    copy: "Copy",
    miniQuiz: "🧠 Quiz:",
    quizCorrect: (explain) => `✅ Correct! ${explain}`,
    quizWrong: (explain) => `❌ Try again — ${explain}`,
    starToast: "🌟 Awesome! You earned a star!",
    copyToast: "📋 Copied to clipboard!",
    commitToast: "💾 Snapshot saved!",
    pushToast: "☁ Upload success!",
    pullToast: "⬇ Sync success!",
    orderToast: "🎯 Order correct!",
    score: (s, t) => `Score: ${s} / ${t}`,
    perfectToast: "🏆 Perfect score! GitHub genius!",
    gradToast: "🎓 Congratulations, graduate!",
    keepGoingToast: "Keep going — you'll get it next time!",
    unanswered: (n) => `${n} question(s) left!`,
    lessonDot: (n) => `Lesson ${n}`,
    questionN: (n, q) => `Q${n}: ${q}`,
    noFiles: "No files yet…",
    tooManyFiles: "⚠ Enough files for now!",
    createFileLog: (name) => `✏ Created file: ${name}`,
    needFile: "❌ Create a file first!",
    commitLog: '💾 Commit OK! Snapshot saved: "Updated project files"',
    needCommit: "❌ Commit first, then Push!",
    pushLog: "☁ Push OK! Files uploaded to GitHub",
    needPush: "❌ Cloud is empty — Push first!",
    pullLog: "⬇ Pull OK! Synced latest from cloud",
    helpTitle: "📱 Can't open on your phone?",
    helpWhy: "Why doesn't localhost work on mobile?",
    helpReason:
      "<strong>localhost means \"this device itself.\"</strong> When you type localhost on your phone, the phone looks for a server <strong>on the phone</strong> — but the page is running on your <strong>computer</strong>. That's why Safari says it can't connect.",
    helpStepsTitle: "3 ways to fix it",
    helpStep1Title: "Option 1: Same WiFi + computer IP",
    helpStep1:
      "1. Connect phone & computer to the <strong>same WiFi</strong><br />2. On computer run: <code>python3 -m http.server 8080 --bind 0.0.0.0</code><br />3. Find computer IP (Mac: System Settings → Network; Windows: ipconfig)<br />4. On phone open: <strong>http://YOUR-IP:8080</strong> (e.g. http://192.168.1.5:8080)",
    helpStep2Title: "Option 2: Easiest — open the file",
    helpStep2:
      "Send the <code>github-tutorial</code> folder to your phone (WeChat, email, cloud drive) and open <code>index.html</code> in a browser. No server needed!",
    helpStep3Title: "Option 3: Deploy to GitHub Pages",
    helpStep3:
      "Push the project to GitHub, enable Pages, then visit <strong>https://yourname.github.io/project-name</strong> on any device!",
    helpToggle: "📱 Mobile access guide",
    langToggle: "中文",
    detailedSteps: "📋 Detailed steps",
    tryInteractive: "👆 Click to simulate step by step",
    interactiveTitle: "Interactive: Create your first project",
    interactiveNext: "Next step",
    interactiveDone: "Done! 🎉",
    interactiveReset: "Replay demo",
  },
};

function getLessons(lang) {
  const zh = [
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
      code: `git config --global user.name "你的名字"
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
      title: "创建第一个项目（超详细）",
      analogy:
        "创建项目就像<strong>开一家小店铺</strong>：先在 GitHub 租个店面（仓库），再把商品（文件）放进去，最后开门营业（公开分享）！",
      steps: [
        "第 1 步：登录 github.com，点右上角绿色按钮或「+」→ New repository",
        "第 2 步：Repository name 填 my-first-project（只能用小写字母、数字、连字符）",
        "第 3 步：Description 写一句介绍，比如「我的第一个 GitHub 项目」",
        "第 4 步：选 Public（公开），新手推荐；Private 只有你能看",
        "第 5 步：勾选 ✅ Add a README file — 自动生成项目说明书",
        "第 6 步：License 可先选 MIT（开源许可，可跳过）",
        "第 7 步：点绿色 Create repository 按钮 — 仓库创建成功！🎉",
        "第 8 步：在仓库页面点 <> Code → 复制 HTTPS 地址，用于克隆到电脑",
      ],
      detailedSteps: [
        { icon: "🖥️", title: "在 GitHub 网页创建仓库", desc: "不需要写代码，点几下鼠标就行" },
        { icon: "📥", title: "克隆到电脑（可选）", desc: "git clone https://github.com/你的用户名/my-first-project.git" },
        { icon: "✏️", title: "添加第一个文件", desc: "点 Add file → Create new file，文件名填 hello.txt，内容写 Hello GitHub!" },
        { icon: "💾", title: "Commit 保存", desc: "页面底部写 commit 说明，点 Commit changes" },
        { icon: "🌍", title: "分享链接", desc: "复制仓库网址发给朋友，他们就能看到你的项目啦！" },
      ],
      interactive: true,
      tip: "💡 第一次不用装 Git 也行！直接在 GitHub 网页上 Add file 就能创建项目。会 Git 后再克隆到电脑更高效。",
      code: `# 方式 A：网页操作（最简单，推荐新手）
# 在仓库页 → Add file → Create new file → Commit changes

# 方式 B：电脑命令行（克隆已有仓库）
git clone https://github.com/你的用户名/my-first-project.git
cd my-first-project
echo "Hello GitHub!" > hello.txt
git add hello.txt
git commit -m "添加第一个文件"
git push`,
      quiz: {
        question: "创建第一个项目，最简单的第一步是？",
        options: [
          { text: "先学会所有编程语言", correct: false },
          { text: "在 GitHub 上 New repository 创建仓库", correct: true },
          { text: "必须先买服务器", correct: false },
        ],
        explain: "先在 GitHub 创建仓库，再往里加文件，就是第一个项目！",
      },
    },
    {
      emoji: "💾",
      title: "提交（Commit）",
      analogy:
        "Commit 就像<strong>给作品拍一张快照</strong>。今天画到哪了？拍一张！明天继续画，再拍一张。",
      steps: [
        "修改文件 = 动了你的作品",
        "git add = 选好要保存哪些改动",
        "git commit = 拍快照，写一句说明",
      ],
      tip: "💡 每次 commit 都要写清楚改了什么，以后找起来方便！",
      code: `git add .
git commit -m "我的第一次提交"`,
      quiz: {
        question: "Commit（提交）是什么？",
        options: [
          { text: "删除所有文件", correct: false },
          { text: "给当前作品拍一张快照保存", correct: true },
          { text: "把项目送给别人", correct: false },
        ],
        explain: "Commit 就是保存当前版本的一个快照！",
      },
    },
    {
      emoji: "☁️",
      title: "推送 & 拉取（Push / Pull）",
      analogy: "Push = <strong>上传到云端</strong>。Pull = <strong>下载最新版</strong>。",
      steps: [
        "Push：本地 → GitHub 云端",
        "Pull：GitHub 云端 → 本地",
        "先 commit 再 push！",
      ],
      tip: "💡 团队合作时，开始工作前先 pull！",
      code: `git push origin main
git pull origin main`,
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
      analogy: "分支就像<strong>平行世界</strong>！试新功能不影响正式版。",
      steps: ["main = 主分支（正式版）", "新建 branch = 试验平行世界", "merge = 合并回主分支"],
      tip: "💡 改大功能前先开分支！",
      code: `git checkout -b feature-新功能
git merge feature-新功能`,
      quiz: {
        question: "为什么要用分支？",
        options: [
          { text: "让项目变复杂", correct: false },
          { text: "安全地试验新功能，不影响正式版", correct: true },
          { text: "分支不能合并", correct: false },
        ],
        explain: "分支让你安全实验，试好了再合并！",
      },
    },
    {
      emoji: "📝",
      title: "Pull Request（合并请求）",
      analogy: "PR 就像<strong>交作业给老师批改</strong>：「我改好了，请合并！」",
      steps: [
        "在分支上完成修改并 push",
        "在 GitHub 上点 New Pull Request",
        "写清楚改了什么，等 review 后合并",
      ],
      tip: "💡 给开源项目提 PR 很有成就感！",
      quiz: {
        question: "Pull Request 是做什么的？",
        options: [
          { text: "请求别人把你的改动合并进项目", correct: true },
          { text: "删除别人的代码", correct: false },
          { text: "下载整个 GitHub", correct: false },
        ],
        explain: "PR 就是「请合并我的改动」！",
      },
    },
  ];

  const en = [
    {
      emoji: "🌍",
      title: "What is GitHub?",
      analogy:
        "Imagine GitHub as a <strong>giant online folder</strong>. You work on homework (code) at home, and GitHub saves it in the cloud so classmates can see and edit together!",
      steps: [
        "Git = a time machine that records every change",
        "Hub = a place where people gather",
        "GitHub = cloud platform to manage projects with Git",
      ],
      tip: "💡 Hundreds of millions use GitHub — many games and apps live here!",
      quiz: {
        question: "GitHub is most like…",
        options: [
          { text: "A private diary only you read", correct: false },
          { text: "A shared online notebook for projects", correct: true },
          { text: "A website only for playing games", correct: false },
        ],
        explain: "GitHub saves, shares, and collaborates — like an online notebook!",
      },
    },
    {
      emoji: "🔑",
      title: "Create your account",
      analogy:
        "Signing up is like getting a <strong>library card</strong>. You get your own shelf (profile page)!",
      steps: [
        "Go to github.com, click Sign up",
        "Enter email, password, and pick a username",
        "Verify email — done! 🎉",
      ],
      tip: "💡 Usernames are hard to change — pick one you like!",
      code: `git config --global user.name "Your Name"
git config --global user.email "your@email.com"`,
      quiz: {
        question: "What do you need to sign up?",
        options: [
          { text: "Phone number only", correct: false },
          { text: "Email and password", correct: true },
          { text: "Must already know coding", correct: false },
        ],
        explain: "Email + password is enough — no coding required!",
      },
    },
    {
      emoji: "📦",
      title: "Repository (Repo)",
      analogy:
        "A repo is a <strong>project folder</strong>. Art portfolio, science experiment, Python game — one repo per project.",
      steps: [
        "Repository = Repo = one project folder",
        "Public: anyone can see",
        "Private: only you (or invited people)",
      ],
      tip: "💡 Beginners: start with Public repos to learn and share!",
      quiz: {
        question: "What is a repository?",
        options: [
          { text: "A place for packages", correct: false },
          { text: "A folder that holds one project", correct: true },
          { text: "GitHub's chat room", correct: false },
        ],
        explain: "A repository stores all files for one project!",
      },
    },
    {
      emoji: "✨",
      title: "Create your first project (detailed)",
      analogy:
        "Creating a project is like <strong>opening a little shop</strong>: rent a storefront (repo), add products (files), then open for visitors (share)!",
      steps: [
        "Step 1: Log in at github.com → click + → New repository",
        "Step 2: Repository name: my-first-project (lowercase, numbers, hyphens only)",
        "Step 3: Description: e.g. \"My first GitHub project\"",
        "Step 4: Choose Public (recommended for beginners); Private = only you",
        "Step 5: Check ✅ Add a README file — auto-creates project intro",
        "Step 6: License: MIT is fine (optional, can skip)",
        "Step 7: Click green Create repository — success! 🎉",
        "Step 8: On repo page → <> Code → copy HTTPS URL to clone later",
      ],
      detailedSteps: [
        { icon: "🖥️", title: "Create repo on GitHub website", desc: "No coding needed — just clicks!" },
        { icon: "📥", title: "Clone to computer (optional)", desc: "git clone https://github.com/YOUR-NAME/my-first-project.git" },
        { icon: "✏️", title: "Add your first file", desc: "Add file → Create new file → name: hello.txt → content: Hello GitHub!" },
        { icon: "💾", title: "Commit to save", desc: "Write commit message at bottom → Commit changes" },
        { icon: "🌍", title: "Share the link", desc: "Copy repo URL and send to friends — they can see your project!" },
      ],
      interactive: true,
      tip: "💡 No Git install needed at first! Use Add file on the website. Install Git later for faster local work.",
      code: `# Option A: Website (easiest for beginners)
# Repo page → Add file → Create new file → Commit changes

# Option B: Command line (after cloning)
git clone https://github.com/YOUR-NAME/my-first-project.git
cd my-first-project
echo "Hello GitHub!" > hello.txt
git add hello.txt
git commit -m "Add first file"
git push`,
      quiz: {
        question: "Simplest first step to create a project?",
        options: [
          { text: "Learn every programming language first", correct: false },
          { text: "New repository on GitHub", correct: true },
          { text: "Buy a server first", correct: false },
        ],
        explain: "Create a repo first, add files — that's your first project!",
      },
    },
    {
      emoji: "💾",
      title: "Commit",
      analogy: "Commit is like <strong>taking a photo snapshot</strong> of your work at this moment.",
      steps: [
        "Edit files = change your work",
        "git add = pick what to save",
        "git commit = snapshot + message",
      ],
      tip: "💡 Write clear commit messages — future you will thank you!",
      code: `git add .
git commit -m "My first commit"`,
      quiz: {
        question: "What is a Commit?",
        options: [
          { text: "Delete all files", correct: false },
          { text: "Save a snapshot of the current version", correct: true },
          { text: "Give project to someone else", correct: false },
        ],
        explain: "Commit saves a snapshot you can return to!",
      },
    },
    {
      emoji: "☁️",
      title: "Push & Pull",
      analogy: "Push = <strong>upload to cloud</strong>. Pull = <strong>download latest</strong>.",
      steps: ["Push: local → GitHub", "Pull: GitHub → local", "Commit before push!"],
      tip: "💡 In teams, pull before you start working!",
      code: `git push origin main
git pull origin main`,
      quiz: {
        question: "What does Push do?",
        options: [
          { text: "Download from GitHub", correct: false },
          { text: "Upload local changes to GitHub", correct: true },
          { text: "Delete remote repo", correct: false },
        ],
        explain: "Push uploads your local changes to GitHub!",
      },
    },
    {
      emoji: "🌿",
      title: "Branch",
      analogy: "Branches are like <strong>parallel worlds</strong> — try features safely!",
      steps: ["main = production version", "new branch = experiment world", "merge = bring changes back"],
      tip: "💡 Open a branch before big changes!",
      code: `git checkout -b feature-new-idea
git merge feature-new-idea`,
      quiz: {
        question: "Why use branches?",
        options: [
          { text: "To make things harder", correct: false },
          { text: "Try new features safely without breaking main", correct: true },
          { text: "Branches can't merge", correct: false },
        ],
        explain: "Branches let you experiment safely!",
      },
    },
    {
      emoji: "📝",
      title: "Pull Request (PR)",
      analogy: "A PR is like <strong>turning in homework for review</strong>: \"Please merge my changes!\"",
      steps: [
        "Finish changes on branch and push",
        "Click New Pull Request on GitHub",
        "Describe changes, wait for review, merge",
      ],
      tip: "💡 Contributing PRs to open source feels great!",
      quiz: {
        question: "What is a Pull Request?",
        options: [
          { text: "Ask to merge your changes into the project", correct: true },
          { text: "Delete someone's code", correct: false },
          { text: "Download all of GitHub", correct: false },
        ],
        explain: "PR means \"please merge my work\" — core of teamwork!",
      },
    },
  ];

  return lang === "en" ? en : zh;
}

function getFinalQuiz(lang) {
  if (lang === "en") {
    return [
      { question: "What is a GitHub repository?", options: ["Chat group", "Folder for one project", "Game leaderboard"], correct: 1 },
      { question: "Best description of Commit?", options: ["Delete files", "Save a version snapshot", "Shut down PC"], correct: 1 },
      { question: "Correct upload order?", options: ["Push → Commit → edit", "Edit → Commit → Push", "Commit → edit → Push"], correct: 1 },
      { question: "Star ⭐ button means?", options: ["Like / bookmark project", "Delete project", "Download to PC"], correct: 0 },
      { question: "What does Fork do?", options: ["Copy repo to your account", "Report project", "Merge two projects"], correct: 0 },
    ];
  }
  return [
    { question: "GitHub 上的「仓库」是什么？", options: ["聊天群组", "存放项目的文件夹", "游戏排行榜"], correct: 1 },
    { question: "Commit 最准确的描述是？", options: ["删除文件", "保存当前版本的快照", "关闭电脑"], correct: 1 },
    { question: "正确的上传顺序是？", options: ["Push → Commit → 改文件", "改文件 → Commit → Push", "Commit → 改文件 → Push"], correct: 1 },
    { question: "Star ⭐ 按钮表示什么？", options: ["给项目点赞/收藏", "删除项目", "下载项目到电脑"], correct: 0 },
    { question: "Fork 是做什么的？", options: ["复制一份别人的仓库到自己账号下", "举报项目", "合并两个项目"], correct: 0 },
  ];
}

function getInteractiveSteps(lang) {
  if (lang === "en") {
    return [
      { scene: "login", label: "Log in to github.com", mock: "👤 Sign in" },
      { scene: "new", label: "Click + → New repository", mock: "➕ New repository" },
      { scene: "form", label: "Name: my-first-project, Public, ✅ README", mock: "📝 Fill form" },
      { scene: "create", label: "Click Create repository", mock: "🟢 Create repository" },
      { scene: "repo", label: "Repo created! You see README.md", mock: "📦 my-first-project" },
      { scene: "addfile", label: "Add file → Create new file → hello.txt", mock: "✏️ hello.txt" },
      { scene: "commit", label: "Commit message → Commit changes", mock: "💾 Commit changes" },
      { scene: "share", label: "Copy URL & share — you're live! 🎉", mock: "🔗 github.com/you/my-first-project" },
    ];
  }
  return [
    { scene: "login", label: "登录 github.com", mock: "👤 登录" },
    { scene: "new", label: "点击 + → New repository", mock: "➕ 新建仓库" },
    { scene: "form", label: "名称 my-first-project，Public，勾选 README", mock: "📝 填写表单" },
    { scene: "create", label: "点击 Create repository", mock: "🟢 创建仓库" },
    { scene: "repo", label: "仓库创建成功！看到 README.md", mock: "📦 my-first-project" },
    { scene: "addfile", label: "Add file → Create new file → hello.txt", mock: "✏️ hello.txt" },
    { scene: "commit", label: "写 commit 说明 → Commit changes", mock: "💾 提交更改" },
    { scene: "share", label: "复制链接分享 — 项目上线啦！🎉", mock: "🔗 github.com/你/my-first-project" },
  ];
}
