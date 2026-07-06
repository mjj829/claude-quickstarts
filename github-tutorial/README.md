# GitHub 魔法学院 🐙

一个面向**完全零基础**用户的交互式 GitHub 入门教程网页。语言简单、界面可爱，小学生也能轻松看懂！

## 特点

- 🌈 **美观易懂** — 彩色卡片、大按钮、生活化比喻（作业本、时光机、平行世界）
- 🎮 **互动练习** — 模拟「写文件 → Commit → Push → Pull」完整流程
- 🧠 **即时测验** — 每课有小测验，最后有毕业考试和证书
- 📱 **开箱即用** — 纯 HTML/CSS/JS，无需安装依赖

## 快速开始

直接用浏览器打开即可：

```bash
# 方法一：双击打开
open github-tutorial/index.html

# 方法二：启动本地服务器（推荐）
cd github-tutorial
python3 -m http.server 8080
# 然后访问 http://localhost:8080
```

## 课程内容

1. GitHub 是什么？
2. 注册账号
3. 仓库（Repository）
4. 创建第一个仓库
5. 提交（Commit）
6. 推送 & 拉取（Push / Pull）
7. 分支（Branch）
8. Pull Request（合并请求）

另有**动手练习场**和**毕业考试**，答对即可拿到「GitHub 小魔法师」证书！

## 文件结构

```
github-tutorial/
├── index.html   # 页面结构
├── styles.css   # 样式
├── app.js       # 交互逻辑
└── README.md
```

## License

MIT
