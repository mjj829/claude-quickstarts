# GitHub 魔法学院 / GitHub Magic Academy 🐙

An interactive, **beginner-friendly** GitHub tutorial — simple enough for kids, available in **中文** and **English**.

## Features

- 🌈 Beautiful UI with animations, confetti, and step-by-step reveals
- 🌐 **Bilingual** — toggle 中文 / EN in the top-right corner
- 📱 **Mobile access guide** — explains why `localhost` fails on phones
- 🎮 Interactive playground — simulate write → commit → push → pull
- ✨ **Detailed "Create first project" lesson** — 8 steps + interactive GitHub mock demo
- 🎓 Quizzes and graduation certificate

## Quick start

### On computer

```bash
cd github-tutorial
python3 -m http.server 8080
# Open http://localhost:8080
```

### On phone — why localhost fails

**`localhost` always means "this device itself."** If you type `localhost` on your phone, the phone looks for a server on the phone — not on your computer. That's why Safari shows "cannot connect to server."

**3 solutions:**

| Method | Steps |
|--------|-------|
| **Easiest** | Send the `github-tutorial` folder to your phone and open `index.html` directly — no server needed! |
| **Same WiFi** | On computer: `python3 -m http.server 8080 --bind 0.0.0.0` → find computer IP → on phone open `http://192.168.x.x:8080` |
| **GitHub Pages** | Push to GitHub, enable Pages → visit from any device |

The tutorial homepage has an expandable **📱 Mobile access guide** with full details.

## Course content

1. What is GitHub?
2. Create account
3. Repository
4. **Create your first project (detailed)** — with interactive demo
5. Commit
6. Push & Pull
7. Branch
8. Pull Request

## Files

```
github-tutorial/
├── index.html
├── styles.css
├── i18n.js      # Chinese + English strings
├── app.js       # Logic & interactivity
└── README.md
```

## License

MIT
