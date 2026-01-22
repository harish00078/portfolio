## 1. Project Overview

**Application Type:** Single Page Application (SPA) / Personal Portfolio
**Primary Function:** A visually immersive developer portfolio designed to showcase MERN stack projects. It features a persistent 3D animated background, scroll-based navigation, and interactive component showcases.

**Key Features:**
* **3D Hero Background:** A dynamic starfield with shooting stars rendered using WebGL.
* **Theme Persistence:** Toggles between Dark/Light modes with local state management.
* **Horizontal Scroll Navigation:** Unique horizontal scrolling experience for the Projects section.
* **Performance Optimization:** Uses Vite for rapid bundling and React Three Fiber for optimized 3D rendering.

---

## 2. Full Tech Stack

The application relies on a modern React ecosystem. Below is the comprehensive list of dependencies chosen for performance and developer experience.

### Core Framework & Build Tool
* **React (v18.2.0):** The library for building the user interface.
* **Vite (v5.0.0):** A next-generation frontend tool ensuring fast cold starts and Hot Module Replacement (HMR).

### 3D & Graphics Engine
* **Three.js (v0.181.2):** The core JavaScript 3D library.
* **@react-three/fiber (v8.16.8):** A React renderer for Three.js, allowing 3D objects to be handled as declarative React components.
* **@react-three/drei (v9.122.0):** A collection of useful helpers and abstractions for React Three Fiber (used here for `Points` and `Preload`).
* **maath (v0.10.8):** A math library used specifically for generating random coordinates for the starfield sphere (`random.inSphere`).

### UI & Styling
* **Tailwind CSS (v3.4.9):** A utility-first CSS framework for rapid UI development.
* **Framer Motion (v11.0.0):** A production-ready animation library for React, handling the entrance animations (fade-ins, slide-ups) and layout transitions.
* **Lucide React (v0.454.0):** A lightweight icon library (used for arrows, social icons, etc.).
* **PostCSS & Autoprefixer:** Tools to transform CSS and ensure cross-browser compatibility.

---

## 3. Backend Architecture

*Note: This repository contains a **Frontend-Only** Single Page Application (SPA). There is no server-side code (Express/Node.js) or Database connection logic in the current build.*

* **Server Logic:** N/A (Client-side routing and rendering only).
* **Database:** N/A (Data is currently static, located in `src/data/`).
* **API Routes:** N/A.

---

## 4. Frontend Architecture

### Component Structure
The application follows a modular, section-based architecture.

| Component | Key Responsibility |
| :--- | :--- |
| **App.jsx** | **Root Component.** Manages global `theme` state and layers the `HeroCanvas` (z-index 0) behind the main content (z-index 10). |
| **HeroCanvas** | **3D Background.** Renders the `<Canvas>` loop. Contains `Stars` (rotating point cloud) and `ShootingStar` instances. Detached from the main scroll flow to remain fixed. |
| **HeroSection** | **Landing View.** Features staggered text animations via `framer-motion` and interactive 3D skill cards (`SkillBox3D`) that rotate on hover. |
| **ProjectsSection** | **Project Showcase.** Implements a custom "vertical-to-horizontal" scroll hijack. It captures `onWheel` events to scroll the project cards horizontally. |
| **ContactSection** | **User Interaction.** Contains a contact form interface. *Note: Currently acts as a UI wrapper; submission logic triggers a `mailto:` action.* |

### State Management
The application uses **React Hooks** for local state management to keep the bundle size small.

* **Theme State (`App.jsx`):**
    * Uses `useState("dark")` to track the current mode.
    * Uses `useEffect` to dynamically add/remove the `.dark` class from the HTML root element.
* **Scroll State (`ProjectsSection.jsx`):**
    * Uses `useRef` to access the scroll container DOM element.
    * Uses `useState` to track the `active` slide index (`0`, `1`, `2`).
    * A scroll event listener calculates `Math.round(scrollLeft / clientWidth)` to update the active state, which triggers CSS transforms.

---

## 5. Installation Guide

### Prerequisites
* **Node.js:** v18.0.0 or higher.
* **Package Manager:** npm, yarn, or pnpm.

### Setup Instructions

1.  **Clone the repository** and navigate to the root folder.
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    This command runs `vite`, starting the local server (typically at `http://localhost:5173`).
4.  **Production Build:**
    ```bash
    npm run build
    ```
    Compiles the app using `vite build` into the `dist/` directory for deployment.

### Environment Variables
No `.env` file is required for this frontend build. All data is currently managed statically within `src/data/`.

---

## 6. Folder Structure

```text
harish-dev-portfolio-p2/
├── public/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroCanvas.jsx       # Three.js canvas setup
│   │   ├── sections/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── ProjectsSection.jsx
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── SocialLinks.jsx
│   ├── data/
│   │   ├── projects.js              # Static project data
│   │   └── skills.js                # Static skill lists
│   ├── assets/                      # Static assets
│   ├── App.jsx                      # Main layout wrapper
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML entry point
├── package.json                     # Dependencies & scripts
├── postcss.config.cjs               # CSS processing config
├── tailwind.config.js               # Tailwind configuration
└── vite.config.js                   # Vite bundler configuration