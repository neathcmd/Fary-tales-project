// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all your files
  ],
  darkMode: "class", // Enable dark mode using a class (e.g., adding 'dark' to the root element)
  theme: {
    extend: {},
  },
  plugins: [],
};
