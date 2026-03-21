# 🤖 TaskFlow AI — Smart Task Manager

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Deployed](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

> A production-grade AI-powered task manager with smart priority scoring,
> real-time analytics and a clean dark-theme UI built with React + TypeScript.

## 🌐 Live Demo
### 👉 [taskflow-ai.netlify.app](https://kavindi-taskmanager.netlify.app)

---

## 📸 Preview

![TaskFlow AI Preview](https://i.imgur.com/placeholder.png)

> Dark-theme task manager with AI priority scoring, analytics dashboard
> and smart filtering by category, priority and deadline.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 AI Prioritization | Smart scoring 0-100 based on deadline, effort and importance |
| 📊 Analytics Dashboard | Completion ring, charts and productivity insights |
| 🎯 Priority Levels | Critical, High, Medium, Low with color coding |
| 🏷️ Categories | Work, Health, Learning, Finance filtering |
| 🔍 Real-time Search | Instant task search and filtering |
| ✅ Task Tracking | Complete, edit and delete with state persistence |
| 🌙 Dark Theme | Professional dark UI with smooth animations |
| 📱 Responsive | Fully mobile-friendly design |

---

## 🛠️ Tech Stack
```
Frontend    →  React 18 + TypeScript
Styling     →  Tailwind CSS + Shadcn/UI
Build Tool  →  Vite 5
Testing     →  Playwright + Vitest
Deployment  →  Netlify
```

---

## 🏗️ System Architecture
```
┌─────────────────────────────────────┐
│         React Frontend              │
│   Components → State → UI Layer     │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│         State Management            │
│         (Zustand Store)             │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│         AI Priority Engine          │
│   Deadline + Effort + Importance    │
│   → Score 0-100 → Sort Tasks        │
└─────────────────────────────────────┘
```

---

## 📁 Project Structure
```
src/
├── components/
│   ├── analytics/          # Charts, stats, completion ring
│   │   ├── AnalyticsCharts.tsx
│   │   ├── CompletionRing.tsx
│   │   └── QuickStats.tsx
│   ├── animations/         # Animated elements
│   │   ├── AnimatedCharacter.tsx
│   │   └── FloatingParticles.tsx
│   ├── layout/             # App layout and sidebar
│   │   ├── AppLayout.tsx
│   │   └── AppSidebar.tsx
│   ├── task/               # Core task components
│   │   ├── TaskCard.tsx
│   │   ├── TaskList.tsx
│   │   ├── TaskFilters.tsx
│   │   ├── AddTaskDialog.tsx
│   │   ├── PriorityBadge.tsx
│   │   └── CategoryBadge.tsx
│   └── ui/                 # Reusable Shadcn components
├── store/                  # Zustand state management
├── pages/                  # Page components
└── App.tsx                 # Root component
```

---

## ⚡ Performance

- ✅ Code splitting with dynamic imports
- ✅ Memoized components to prevent re-renders
- ✅ Optimized bundle with Vite
- ✅ Lazy loaded routes
- ✅ Lighthouse score 90+

---

## 🚀 Run Locally
```bash
# Clone the repo
git clone https://github.com/kavigamage-da/taskflow-ai

# Navigate to project
cd taskflow-ai

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🧪 Testing
```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e
```

---

## 🔑 Key Engineering Decisions

| Decision | Reason |
|----------|--------|
| React + TypeScript | Type safety, better DX, scalable codebase |
| Tailwind CSS | Rapid styling, consistent design system |
| Shadcn/UI | Accessible, customizable components |
| Vite | Fast HMR, optimized production builds |
| Zustand | Lightweight state, no boilerplate |

---

## 📈 Future Improvements

- [ ] Backend API with Node.js + PostgreSQL
- [ ] Real OpenAI GPT integration
- [ ] User authentication with NextAuth
- [ ] Real-time sync with WebSockets
- [ ] Mobile app with React Native
- [ ] Team collaboration features

---

## 👩‍💻 Author

**Kavindi Gamage** — Frontend Developer & Data Analyst from Sri Lanka 🇱🇰

[![Portfolio](https://img.shields.io/badge/Portfolio-kavindi.netlify.app-purple?style=flat-square)](https://kavindi.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/kavindi-gamage-815049386)
[![Fiverr](https://img.shields.io/badge/Fiverr-Hire_Me-1DBF73?style=flat-square&logo=fiverr)](https://fiverr.com/ashi_analytics)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/kavigamage-da)

---

<div align="center">
⭐ Star this repo if you found it useful!
<br/>
Made with ❤️ in Sri Lanka
</div>
