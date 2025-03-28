import { useContext } from "react";
import { ThemeContext } from "../../src/App/Ui/ThemeContext";

const Logo = "Sal Monineath";

export default function Navber() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navber must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <header
      className={`w-full h-auto flex items-center justify-between ${
        theme === "dark"
          ? "bg-gradient-to-r from-blue-900 to-purple-800"
          : "bg-white"
      }`}
      style={{
        backgroundImage:
          theme === "dark"
            ? "url('/images/dark-theme-bg.jpg')"
            : "url('/images/light-theme-bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <a href="">{Logo}</a>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 rounded-md text-white bg-gray-800 dark:bg-gray-200 dark:text-black"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
