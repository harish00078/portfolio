/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["'Fira Code'", "ui-monospace", "SFMono-Regular"]
      },
      colors: {
        brand: {
          500: "#38bdf8",
          600: "#0ea5e9",
          700: "#0284c7"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.45)"
      }
    },
  },
  plugins: [],
}
