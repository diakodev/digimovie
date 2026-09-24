# 🎬 DigiMovie

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,sass,bootstrap,axios,git" />
  </a>
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode,github,localStorage" />
  </a>
</p>

<p align="center">
  <strong>A practice project for learning RESTful API integration with advanced filtering, search, and an interactive UI</strong>
</p>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [How to Run](#-how-to-run)
- [Important Notes](#-important-notes)
- [Screenshots](#-screenshots)
- [Author](#-author)

---

## 🎯 About

**DigiMovie** is a web-based practice project designed to learn and demonstrate proficiency in working with **RESTful APIs**.

This project provides a simple and user-friendly interface where users can:

- Browse and filter movies based on **personal interests**
- Find movies in **any language and genre** they prefer
- View detailed movie information including **title, genre, rating, and poster image**

> 💡 **Note:** This project is purely educational. The goal was to master API management, handling requests, and processing retrieved data.

---

## ✨ Features

### 🔍 Search & Filter

| Feature                  | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| 🔎 **Advanced Search**   | Search movies by title                               |
| 🎭 **Genre Filter**      | Filter movies by genre (Action, Drama, Comedy, etc.) |
| 🌍 **Country Filter**    | Browse movies from different countries               |
| 👤 **Age Rating Filter** | Show movies suitable for a specific age group        |
| ⭐ **Rating Filter**     | Sort and filter movies by rating                     |

### 🎨 User Interface

| Feature                  | Description                                  |
| ------------------------ | -------------------------------------------- |
| 🌓 **Dark/Light Mode**   | Toggle theme with `localStorage` persistence |
| 📄 **Pagination**        | Browse movies across multiple pages          |
| 🖼️ **Movie Posters**     | Display poster and image for each movie      |
| 📊 **Movie Ratings**     | Visual rating display for each movie         |
| 📱 **Responsive Design** | Compatible with all screen sizes             |

---

## 🛠️ Technologies Used

```
├── Frontend
│   ├── HTML5          ── Page structure
│   ├── CSS3           ── Styling
│   ├── Sass (SCSS)    ── CSS preprocessor
│   ├── Bootstrap 5    ── Responsive framework
│   └── JavaScript     ── Application logic
│
├── Tools
│   ├── Axios          ── HTTP request handling
│   ├── Fetch API      ── Network requests
│   └── Git            ── Version control
│
└── Storage
    └── localStorage   ── User preferences (theme persistence)
```

---

## 🚀 How to Run

### Prerequisites

- A modern browser (Chrome, Firefox, Edge)
- Internet connection

### Steps

**1. Clone the repository:**

```bash
git clone https://github.com/diakodev/digimovie.git
cd digimovie
```

**2. Install dependencies:**

```bash
npm install
```

> ⚠️ **Important:** Since `node_modules` is excluded from Git (via `.gitignore`), you **must** run `npm install` after cloning to install the required packages.

**3. Run the project:**

Open `index.html` in your browser:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

---

## 📌 Important Notes

### 🔐 IP Restrictions

> ⚠️ **Important for users in restricted regions:**
>
> The API used in this project may be blocked for certain IPs (including Iranian IPs).  
> You may need to use a **VPN** to access the full functionality.

### 📦 node_modules

- `node_modules` is excluded from Git via `.gitignore`
- After cloning, run `npm install` to install dependencies (Axios, Bootstrap, Sass, etc.)
- All code is written in a simple and readable manner

### 💾 localStorage

- The **Dark/Light mode** preference is saved in the browser's `localStorage`
- Your theme choice persists even after closing the browser

### 🔮 Future Improvements

This project serves as a foundation and practice. Future projects will include:

- **Modular architecture** implementation
- **React** or **Vue.js** integration
- Advanced **state management** capabilities

---

## 🖼️ Screenshots

> 📸 Screenshots coming soon

```
┌─────────────────────────────────────────┐
│  🎬 DigiMovie            🌓 Dark/Light  │
├─────────────────────────────────────────┤
│  🔍 Search...                           │
│                                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │ 🎬  │ │ 🎬  │ │ 🎬  │ │ 🎬  │      │
│  │Movie│ │Movie│ │Movie│ │Movie│      │
│  │ ⭐ 8 │ │ ⭐ 7 │ │ ⭐ 9 │ │ ⭐ 6 │      │
│  └─────┘ └─────┘ └─────┘ └─────┘      │
│                                         │
│  Filters: [Genre ▼] [Country ▼] [Age▼] │
│                                         │
│                         │
└─────────────────────────────────────────┘
```

---

## 👨‍💻 Author

**Built by:** Pasargad

---

## 📜 License

This project is built for educational and practice purposes.

---

<div align="center">

---

### 🔥 Built with passion & caffeine 🔥

<img src="https://img.shields.io/badge/Developer-Pasargad-1a73e8?style=for-the-badge&logo=github&logoColor=white" alt="Developer"/>

<br>

```
╔═══════════════════════════════════════════════════╗
║                                                   ║
║     ❤️  Made with Love    ☕  Powered by Coffee   ║
║                                                   ║
║          🎬 DigiMovie © 2024                      ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```

<br>

![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=2ECC71&center=true&vCenter=true&multiline=true&repeat=true&width=600&height=100&lines=Thanks+for+visiting!;If+you+liked+it,+star+it!+⭐)

<br>

<img src="https://komarev.com/ghpvc/?username=pasargad&label=Profile%20Views&color=0e75b6&style=flat" alt="Profile Views"/>

</div>
