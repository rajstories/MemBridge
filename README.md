<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&height=300&color=gradient&customColorList=0,2,4,12,30&text=MemBridge&fontSize=110&fontColor=ffffff&animation=fadeIn&fontAlignY=55&desc=Your%20Memory.%20Every%20AI.%20One%20File.%20%7C%20contextify%20yourself&descAlignY=75&descSize=18&stroke=ffffff&strokeWidth=1" width="100%"/>

<br/>

<p>
  <img src="https://img.shields.io/badge/STATUS-ACTIVE-00ff88?style=for-the-badge&logo=checkmarx&logoColor=black&labelColor=0d0d0d"/>
  <img src="https://img.shields.io/badge/CONTEXT-PORTABLE-7c3aed?style=for-the-badge&logo=buffer&logoColor=white&labelColor=0d0d0d"/>
  <img src="https://img.shields.io/badge/AI-AGNOSTIC-0ea5e9?style=for-the-badge&logo=openai&logoColor=white&labelColor=0d0d0d"/>
</p>

<p>
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Chrome-Extension-4285F4?style=flat-square&logo=googlechrome&logoColor=white"/>
  <img src="https://img.shields.io/badge/CLI-contextify-a855f7?style=flat-square&logo=gnubash&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-22c55e?style=flat-square"/>
</p>

<p>
  <img src="https://img.shields.io/badge/Works%20On-ChatGPT-10a37f?style=for-the-badge&logo=openai&logoColor=white&labelColor=0d0d0d"/>
  <img src="https://img.shields.io/badge/Works%20On-Claude-d97706?style=for-the-badge&logo=anthropic&logoColor=white&labelColor=0d0d0d"/>
  <img src="https://img.shields.io/badge/Works%20On-Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white&labelColor=0d0d0d"/>
  <img src="https://img.shields.io/badge/Works%20On-Any%20AI-ec4899?style=for-the-badge&logo=sparkles&logoColor=white&labelColor=0d0d0d"/>
</p>

<br/>

> ### *"You switch AIs. You lose your context. You explain yourself again. And again. And again. MemBridge ends that."*

<br/>

**[🚀 Try It](#getting-started) · [📖 How It Works](#how-it-works) · [🔌 Extension](#browser-extension) · [🤝 Contribute](#contributing)**

</div>

## 🧠 The Problem

<div align="center">

| Every. Single. Time. |
|---|
| 💬 *"I'm a developer, I prefer short answers, I'm building a SaaS..."* |
| 🤖 *"Great! Tell me more about yourself..."* |
| ⏭️ *— switch to a new AI —* |
| 💬 *"I'm a developer, I prefer short answers, I'm building a SaaS..."* |
| 🤖 *"Sounds cool! What's your background?"* |
| 😤 *same thing. again. and again. forever.* |

</div>

<br/>

Context is **trapped** inside each platform. Switch to a new AI? Start from zero.

**MemBridge is the bridge.** One file. Any AI. Instant context.

---

<br/>

## ⚡ How It Works

<div align="center">

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   📝  Answer 7 questions   →   🗂️  Get your context block  │
│                                                             │
│   🔌  Install extension    →   💉  Auto-inject anywhere     │
│                                                             │
│   ✏️   Edit anytime        →   🔄  Update once, works all   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

</div>

<br/>

**Your generated context block:**

```markdown
## My Context — via MemBridge
- Who I am  : Full-stack dev, building an AI productivity tool
- Based in  : Delhi, India
- Talk to me: Direct, no fluff. Short first, details on ask.
- Stack     : React, Node.js, PostgreSQL, Next.js
- Building  : SaaS for indie hackers — in MVP phase
- Goals     : Ship v1, get first 100 users by Q2
- Always    : Hate jargon. Use real examples. Be blunt.
```

> Paste this anywhere. ~400 tokens. Every AI instantly *gets you.*

---

<br/>

## 🚀 Getting Started

```bash
# clone
git clone https://github.com/yourusername/membridge
cd membridge

# install
npm install

# run
npm run dev
```

Or use the CLI directly:

```bash
# one-time setup
npx contextify setup

# inject into current chat
npx contextify inject

# view your context block
npx contextify show
```

---

<br/>

## 🗂️ Project Structure

```
membridge/
│
├── 📁 app/                    # Next.js app router
├── 📁 components/
│   ├── 🧙 Wizard.tsx          # 7-step context builder
│   └── 📋 PassportOutput.tsx  # copy / download / share
│
├── 📁 lib/
│   └── 🔑 passport.ts         # schema + prompt generator
│
├── 📁 extension/              # Chrome / Firefox extension
│   ├── manifest.json
│   └── content.js             # auto-inject on AI sites
│
└── 📄 README.md
```

---

<br/>

## 🔌 Browser Extension

Install → click icon → **done.** Your context auto-injects into the chat input.

<div align="center">

| Platform | Status |
|---|---|
| 🟢 ChatGPT | ✅ Supported |
| 🟢 Claude | ✅ Supported |
| 🟢 Gemini | ✅ Supported |
| 🟡 Perplexity | 🔄 Coming Soon |
| 🟡 Mistral | 🔄 Coming Soon |
| ⚪ Any AI | ⚙️ Custom selector support |

</div>

---

<br/>

## 🛣️ Roadmap

```
  v0.1  ✅  Wizard + context block generator
  v0.2  🔄  Browser extension — auto-inject
  v0.3  📦  CLI — npx contextify
  v0.4  🕓  Context version history
  v0.5  🔗  Shareable public profile links
  v1.0  🧩  Plugin API for third-party AI tools
```

---

<br/>

## 🤝 Contributing

100% open source. Built in public. Everyone welcome.

```bash
# fork → clone → branch → PR
git checkout -b feature/your-idea
git commit -m "add: your idea here"
git push origin feature/your-idea
```

- 🐛 Found a bug? → [Open an issue](https://github.com/yourusername/membridge/issues)
- 💡 Have an idea? → [Start a discussion](https://github.com/yourusername/membridge/discussions)
- 🔌 Adding a platform? → Add a selector in `/extension/content.js`

No gatekeeping. No CLA. Just ship.

---

<br/>

## 💭 Philosophy

<div align="center">

> *AI tools will keep changing.*
> *New models. New platforms. New interfaces.*
>
> *But who you are — how you think, what you build, how you communicate —*
> *that's **yours.** It shouldn't live inside any company's servers.*
>
> **MemBridge keeps your context with you. Always.**

</div>

---

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&color=gradient&customColorList=0,2,12,20,24&section=footer" width="100%"/>

**Built with ❤️ for everyone tired of re-introducing themselves to AI**

⭐ Star it if this saves you time &nbsp;·&nbsp; 🍴 Fork it and make it yours &nbsp;·&nbsp; 📢 Share it with your dev circle

<br/>

*contextify yourself.*

</div>
