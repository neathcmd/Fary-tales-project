import { useContext } from "react";
import LogoImage from "../assets/image.png";
import { ThemeContext } from "../../src/App/Ui/ThemeContext";

const NavItems = [
  { name: "HOME", link: "#" },
  { name: "STORIES", link: "#" },
  { name: "FAVORITE", link: "#" },
];

export default function Navber() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navber must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <header className="w-full h-auto flex items-center justify-between bg-black">
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo image */}
        <a href="/" className="w-1/4">
          <img src={LogoImage} alt="Logo" width="180" />
        </a>

        {/* nav menu */}
        <nav className="flex items-center justify-center">
          <ul className="flex items-center">
            {NavItems.map((item) => (
              <li key={item.name} className="inline-block mx-4">
                <a
                  href={item.link}
                  className="text-lg font-semibold text-white"
                >
                  {item.name}
                </a>
                <span className="text-[#FF0E4D] text-3xl pl-8">{"|"}</span>
              </li>
            ))}
            {/* Theme Toggle Button */}
            <li className="px-6 py-4">
              <div className="flex items-center">
                <div
                  className="relative inline-block w-14 h-7 cursor-pointer overflow-hidden rounded-full"
                  onClick={() => {
                    toggleTheme();
                  }}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  role="switch"
                  aria-checked={theme === "dark"}
                >
                  <div
                    className={`
                    absolute inset-0 transition-colors duration-300
                    ${theme === "dark" ? "bg-blue-800" : "bg-gray-600"}
                  `}
                  />
                  <div
                    className={`
                    absolute top-1/2 -translate-y-1/2 
                    w-6 h-6 bg-white rounded-full 
                    shadow-md transition-all duration-300
                    flex items-center justify-center text-sm
                    ${theme === "dark" ? "translate-x-7" : "translate-x-1"}
                  `}
                  >
                    {theme === "dark" ? "🌙" : "☀️"}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
