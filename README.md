# ⚡ Harish Dev Portfolio (v2)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Threejs](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> A high-performance, immersive developer portfolio featuring a 3D starfield background, cinematic animations, and a unique horizontal scrolling showcase. Built with the MERN stack ecosystem in mind.

---

## 🌟 Key Features

* **Cinematic 3D Background:** A persistent, interactive starfield rendered with **Three.js** and **React Three Fiber**.
* **Performance First:** Powered by **Vite** for lightning-fast HMR and optimized builds.
* **Horizontal Scroll Experience:** A custom-engineered project section that transforms vertical scroll gestures into horizontal navigation.
* **Theme Persistence:** Seamless Dark/Light mode toggling with local storage state management.
* **Interactive UI:** Staggered entrance animations powered by **Framer Motion** and 3D tilt effects on hover.

---

## 🛠️ Tech Stack

| Domain | Technology | Usage |
| :--- | :--- | :--- |
| **Core** | React 18 | Component-based UI Architecture |
| **Build Tool** | Vite 5 | Fast bundling & Hot Module Replacement |
| **Styling** | Tailwind CSS | Utility-first responsive design |
| **3D Engine** | Three.js / R3F | WebGL rendering & Canvas management |
| **Animation** | Framer Motion | Layout transitions & scroll animations |
| **Icons** | Lucide React | Lightweight SVG iconography |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* **Node.js** (v18 or higher)
* **npm** (or yarn/pnpm)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/harish00078/portfolio.git](https://github.com/harish00078/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser to view the app.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── 3d/                 # Three.js canvas & starfield logic
│   ├── sections/           # Main page sections (Hero, Projects, Contact)
│   └── ...                 # Shared UI components (Navbar, Buttons)
├── data/
│   ├── projects.js         # Static data for project cards
│   └── skills.js           # Static data for skill columns
├── App.jsx                 # Theme provider & layout wrapper
└── main.jsx                # Entry point