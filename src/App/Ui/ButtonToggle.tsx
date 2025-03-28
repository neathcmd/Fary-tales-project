// src/UI/ButtonToggle.tsx
import { useTheme } from "./ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const ButtonToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  // Add a console log to verify the button click
  const handleToggle = () => {
    console.log("Toggling theme. Current mode:", isDarkMode ? "Dark" : "Light");
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 
                 hover:bg-gray-300 dark:hover:bg-gray-600 
                 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};
