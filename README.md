# 🧠 RevAI – AI Code Reviewer

🚀 [Live Demo](https://rev-ai-frontend.vercel.app/)  
⚙️ Built with MERN Stack + AI Integration

RevAI is a modern AI-powered code review platform that analyzes and provides feedback on your source code instantly. Built to streamline code quality checks for developers, teams, and students.

---

## ✨ Features

- 🔍 **AI-Powered Reviews** – Get instant code insights using Google Gemini API.
- 🎯 **Live Markdown Output** – See AI suggestions rendered in real-time.
- 🧑‍💻 **Supports C++** (and extendable to other languages).
- 💡 **Clean Developer UI** – Minimal, fast, and distraction-free interface.
- 🧵 **Modern Tech Stack** – Built with React.js, Node.js, Express, and Tailwind CSS.

---

## 📸 Screenshots

| Code Editor | AI Suggestions |
|-------------|----------------|
| ![Code Editor](https://i.imgur.com/y9aQcbX.png) | ![AI Response](https://i.imgur.com/GXLzA0w.png) |

---

## 🏗️ Tech Stack

**Frontend:**
- React.js (with Vite)
- Tailwind CSS
- React Markdown + Rehype Highlight

**Backend:**
- Node.js (ESM)
- Express.js
- Google GenAI SDK (Gemini 1.5 Flash API)

**Deployment:**
- Vercel (Frontend)
- Render (Backend or any Node-hosting platform)

---

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/rev-ai.git
cd rev-ai

# Install frontend dependencies
cd frontend
npm install
npm run dev

# Install backend dependencies
cd ../backend
npm install
npm run start



Project Structure

rev-ai/
├── frontend/
│   ├── src/
│   └── App.jsx
├── backend/
│   └── index.js
└── README.md
