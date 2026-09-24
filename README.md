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
<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_33_480)">
<path d="M196 0H60C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H196C229.137 256 256 229.137 256 196V60C256 26.8629 229.137 0 196 0Z" fill="#242938"/>
<path d="M40 65.6631L110.968 55.9983L111 124.453L40.0656 124.857L40 65.6631ZM110.935 132.34L110.99 200.855L40.0557 191.102L40.0517 131.881L110.935 132.34ZM119.537 54.7335L213.636 41V123.582L119.537 124.33V54.7335ZM213.658 132.984L213.636 215.195L119.537 201.914L119.406 132.831L213.658 132.984Z" fill="#00ADEF"/>
</g>
<defs>
<clipPath id="clip0_33_480">
<rect width="256" height="256" fill="white"/>
</clipPath>
</defs>
</svg>
start index.html

<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_33_740)">
<path d="M196 0H60C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H196C229.137 256 256 229.137 256 196V60C256 26.8629 229.137 0 196 0Z" fill="#242938"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M191.072 195.009C187.802 200.396 184.532 204.435 180.588 208.185C176.164 212.129 174.914 215.591 164.718 216.939C157.505 218.286 151.253 215.591 148.848 214.534C141.634 211.167 137.882 210.11 133.555 210.11C129.323 210.11 125.764 211.168 118.646 214.438C116.434 215.591 110.471 218.189 103.161 216.843C95.6587 215.496 91.8113 212.611 89.022 210.206C83.251 205.109 78.9228 200.299 74.9792 194.721L191.072 195.009Z" fill="#00A0E2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M58.7255 105.27C62.0919 97.6719 66.5163 92.5741 70.9407 89.0154C82.1942 79.7818 100.565 79.2047 109.029 81.4169C115.955 83.1482 120.86 87.3802 128.651 87.3802C136.826 87.3802 141.538 83.2444 147.984 81.4169C156.448 79.3009 174.915 79.9741 186.938 89.2077C190.497 91.9009 193.765 95.5558 195.593 97.5757C191.266 100.75 188.668 103.058 186.552 105.27H58.7255Z" fill="#34BE2D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M186.553 105.27C184.533 107.482 183.091 109.599 181.455 112.58C179.533 116.043 177.223 120.756 176.646 127.873H53.0508C53.147 126.719 53.2431 125.469 53.4355 124.218C54.5897 116.62 56.4172 110.368 58.7256 105.27H186.553Z" fill="#FFB400"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M176.646 127.873C176.55 130.052 176.55 132.235 176.646 134.414C176.935 139.704 178.762 145.571 181.167 150.284L55.4553 149.995C53.724 142.397 52.7622 134.606 53.0507 127.873H176.646Z" fill="#FF7A00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M181.166 150.284C182.15 152.325 183.342 154.259 184.724 156.055C192.996 166.635 196.555 166.635 202.999 169.906C202.52 171.058 202.135 172.118 201.653 173.08L62.7653 172.791C60.0721 166.924 57.2828 158.652 55.4553 149.996L181.166 150.284Z" fill="#F41E34"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M201.653 173.08C197.614 182.506 194.343 189.429 191.072 195.009L74.9805 194.721C71.1332 189.046 67.6706 182.793 63.7271 175.002C63.4385 174.329 63.0538 173.559 62.7653 172.791L201.653 173.08Z" fill="#A2359C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M161.352 52.658C160.679 57.4672 158.274 63.6229 154.427 67.5664C150.289 71.9909 143.846 76.8 139.998 79.2046C137.882 80.5512 132.399 80.7435 127.88 81.2245C127.303 77.1848 127.207 73.7222 128.457 69.971C130.092 65.5466 132.21 59.1985 135.575 54.7741C139.711 49.2916 144.424 45.5405 147.021 44.1939C150.484 42.4626 156.255 39.8656 161.256 39C161.449 43.4244 162.123 48.426 161.352 52.658Z" fill="#34BE2D"/>
</g>
<defs>
<clipPath id="clip0_33_740">
<rect width="256" height="256" fill="white"/>
</clipPath>
</defs>
</svg>
open index.html

<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#ECEFF1" d="M85.9493 199.926L110.48 213.546H147.576L182.278 187.491L197.834 146.632L161.935 103.405L151.764 79.1268L102.104 80.9032L102.702 94.5228L93.1291 112.287L78.1713 141.303L75.1797 165.581L85.9493 199.926Z"/><path fill="#263238" d="M187.064 114.656C177.491 101.036 169.713 92.7463 165.525 75.5738C161.337 58.4013 166.722 63.1386 163.132 48.3347C161.337 40.6367 158.345 35.3073 155.354 31.1622C151.764 27.0171 147.576 24.6485 145.182 24.0563C139.798 21.0956 127.233 16.3583 111.677 24.6485C95.5223 32.9387 97.3172 50.7033 100.309 86.8248C100.309 89.1934 99.7105 92.1542 98.5139 94.5228C96.1206 99.8522 91.9324 104.589 88.3425 108.735C84.1543 114.656 79.9661 120.578 76.9746 127.091C69.7948 140.711 63.2134 157.883 65.0083 164.397C67.9999 163.805 105.694 220.652 105.694 221.836C108.087 221.244 118.258 221.244 127.233 221.244C139.798 220.652 146.977 220.06 157.149 222.428C157.149 220.652 156.55 218.875 156.55 217.099C156.55 213.546 157.149 210.585 157.747 206.44C158.345 203.479 158.944 200.519 159.542 196.966C153.559 202.295 142.789 208.217 132.618 209.993C123.643 211.769 108.685 208.809 101.505 199.926C102.104 199.926 103.3 199.926 103.899 199.334C105.694 198.742 107.489 198.15 108.087 196.966C109.882 194.005 108.685 191.044 107.489 189.268C106.292 187.491 97.3173 180.977 93.1291 177.425C88.9409 173.872 86.5476 172.095 84.1544 169.727C84.1544 169.727 80.5645 166.174 79.3678 164.989C78.1712 163.805 77.5729 162.621 76.9746 162.028C75.778 159.068 75.1796 155.515 75.778 150.778C76.3763 144.264 78.7695 138.934 81.7611 133.013C82.9577 130.644 85.9493 125.907 85.9493 125.907C85.9493 125.907 75.778 150.778 81.1628 158.476C81.1628 158.476 81.7611 150.778 84.1544 143.08C85.9493 137.75 88.9409 130.052 92.5307 125.907C96.1206 121.762 105.095 106.366 105.694 96.8914C105.694 92.7463 106.292 88.6012 106.292 85.6405C103.899 83.2718 145.781 77.3503 148.174 83.864C148.772 86.2326 157.149 107.55 161.935 118.801C164.328 124.131 167.32 128.868 169.115 134.789C170.91 141.303 172.106 150.185 172.106 159.068C172.106 160.844 172.106 163.805 171.508 166.766C172.705 166.766 196.039 141.895 168.517 121.17C168.517 121.17 185.269 128.868 185.868 144.264C186.466 156.699 181.081 166.766 179.885 168.542C180.483 168.542 192.449 173.872 193.047 173.872C195.441 173.872 200.227 172.095 200.227 172.095C200.826 170.319 202.62 165.581 202.62 163.805C206.809 150.185 196.637 128.276 187.064 114.656V114.656Z"/><path fill="#ECEFF1" d="M111.078 75.5738C115.374 75.5738 118.856 70.2714 118.856 63.7307C118.856 57.1899 115.374 51.8876 111.078 51.8876C106.783 51.8876 103.3 57.1899 103.3 63.7307C103.3 70.2714 106.783 75.5738 111.078 75.5738Z"/><path fill="#ECEFF1" d="M138.002 76.7581C143.62 76.7581 148.174 70.6604 148.174 63.1386C148.174 55.6167 143.62 49.519 138.002 49.519C132.385 49.519 127.831 55.6167 127.831 63.1386C127.831 70.6604 132.385 76.7581 138.002 76.7581Z"/><path fill="#212121" d="M115.424 64.5411C114.927 60.6476 112.663 57.7241 110.368 58.0111C108.074 58.2982 106.616 61.6872 107.114 65.5807C107.611 69.4741 109.874 72.3977 112.169 72.1106C114.464 71.8235 115.921 68.4345 115.424 64.5411Z"/><path fill="#212121" d="M137.404 73.2052C140.709 73.2052 143.387 69.7587 143.387 65.5072C143.387 61.2557 140.709 57.8091 137.404 57.8091C134.1 57.8091 131.421 61.2557 131.421 65.5072C131.421 69.7587 134.1 73.2052 137.404 73.2052Z"/><path fill="#FFC107" d="M216.98 195.781C214.587 194.597 210.398 192.82 206.808 187.491C205.014 184.53 205.612 176.24 202.62 172.687C200.825 170.319 198.432 171.503 197.834 171.503C192.449 172.687 179.884 180.977 171.508 171.503C170.311 170.319 168.516 168.542 165.525 168.542C162.533 168.542 161.337 169.726 160.14 172.095C158.943 174.464 158.943 176.24 158.943 182.162C158.943 186.899 158.943 192.228 158.345 196.373C157.148 206.44 155.354 212.362 155.354 218.283C155.354 224.797 157.148 228.942 159.542 230.718C161.337 232.495 164.328 233.679 170.91 233.679C177.491 233.679 181.679 231.311 185.868 227.165C188.859 224.205 191.252 223.02 199.629 217.099C206.21 212.954 216.382 207.624 218.176 205.848C219.373 204.664 221.168 204.071 221.168 200.518C221.168 197.558 218.775 196.373 216.98 195.781V195.781Z"/><path fill="#FFC107" d="M96.7189 197.558C90.7357 188.083 90.1374 186.307 85.9492 180.385C82.3593 174.464 74.5813 163.213 69.7948 163.213C66.2049 163.213 64.4099 164.989 62.0167 167.358C59.6234 169.726 57.2302 175.056 53.042 178.017C49.4521 180.977 39.2808 180.385 36.8875 183.938C34.4942 187.491 39.2808 192.821 39.2808 201.703C39.2808 205.256 36.2892 207.624 35.6909 209.993C35.0926 212.954 34.4942 214.73 35.6909 217.099C38.0841 220.652 41.0757 221.836 61.4184 225.981C72.188 228.35 82.3593 234.271 88.9408 234.864C95.5222 235.456 106.89 234.864 106.89 218.875C107.489 209.401 102.104 207.032 96.7189 197.558Z"/><path fill="#FFC107" d="M108.087 90.3777C104.497 88.0091 101.505 85.6404 101.505 82.0875C101.505 78.5346 103.899 77.3503 107.489 74.3895C108.087 73.7973 114.668 67.8758 121.25 67.8758C127.831 67.8758 135.609 72.0209 138.601 73.2052C143.986 74.3895 149.37 75.5738 148.772 79.7189C148.174 85.6404 147.576 86.8248 141.592 89.7855C137.404 90.9698 129.626 97.4835 124.241 97.4835C121.848 97.4835 118.258 97.4835 115.865 96.8914C114.07 96.2992 111.078 93.3385 108.087 90.3777V90.3777Z"/><path fill="#634703" d="M106.89 85.6405C108.087 86.8248 109.882 88.0091 111.677 88.6012C112.873 89.1934 114.668 89.7856 114.668 89.7856C117.062 89.7856 118.857 89.7856 120.053 89.7856C123.045 89.7856 127.233 88.6013 131.421 86.2326C135.609 84.4562 136.208 83.2718 139.199 82.0875C142.191 80.3111 145.182 78.5346 143.986 77.9425C142.789 77.3503 141.592 77.9425 137.404 80.3111C133.814 82.6797 130.823 83.864 127.233 85.6405C125.438 86.2326 123.045 87.4169 121.25 87.4169C119.455 87.4169 117.66 87.4169 115.865 87.4169C114.07 87.4169 112.873 86.8248 111.078 86.2326C109.882 85.6405 109.283 85.0483 108.685 85.0483C107.489 84.4562 105.095 82.0875 103.899 81.4954C103.899 81.4954 102.702 81.4954 103.3 82.0875C105.095 83.864 105.694 84.4562 106.89 85.6405Z"/><path fill="#634703" d="M124.84 72.613C125.438 73.7973 126.635 73.7973 127.233 74.3895C127.831 74.9816 128.429 74.9816 128.429 74.9816C129.028 74.3895 128.429 73.2052 127.831 73.2052C127.831 72.0209 124.84 72.0209 124.84 72.613V72.613Z"/><path fill="#634703" d="M115.267 73.7973C115.267 74.3895 116.463 74.9816 116.463 74.3895C117.062 73.7973 117.66 73.2052 118.258 73.2052C119.455 72.613 118.856 72.0209 117.062 72.0209C115.865 72.613 115.865 73.2052 115.267 73.7973V73.7973Z"/><path fill="#455A64" d="M173.303 178.609C173.303 179.201 173.303 179.793 173.303 180.385C174.5 182.754 177.491 183.346 179.884 183.346C183.474 183.346 187.064 180.977 188.859 178.609C188.859 178.017 189.457 177.424 190.056 176.832C191.252 175.056 191.851 173.872 192.449 173.279C192.449 173.279 191.851 172.687 191.851 172.095C191.252 170.911 189.457 169.726 187.064 169.134C185.269 168.542 182.278 167.95 181.081 167.95C175.696 167.358 172.705 169.134 170.91 170.911C170.91 170.911 171.508 170.911 171.508 171.503C172.705 172.687 173.303 173.872 173.303 175.648C173.901 176.832 173.303 177.424 173.303 178.609V178.609Z"/></svg>
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
