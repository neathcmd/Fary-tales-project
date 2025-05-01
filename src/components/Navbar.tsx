import { useContext, useState } from "react";
import LogoImage from "../assets/image.png";
import { ThemeContext } from "../Layout/ThemeContext";
import UserProfileNav from "../components/UserNavigation";
import { Link } from "react-router";

interface NavItem {
  name: string;
  link: string;
}

const NavItems: NavItem[] = [
  { name: "HOME", link: "/" },
  { name: "STORIES", link: "/story" },
  { name: "FAVORITE", link: "/favorite" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar can't be used outside a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-pink-600 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={LogoImage}
              alt="Logo"
              className="w-32 sm:w-40 lg:w-48 transition-all duration-300"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white focus:outline-none rounded-md z-50"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6">
              <i
                className={`fas fa-bars absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
                }`}
              ></i>
              <i
                className={`fas fa-times absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              ></i>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end flex-1">
            <ul className="flex items-center me-7 gap-6 xl:gap-8">
              {NavItems.map((item, index) => (
                <li key={`nav-item-${index}`} className="relative">
                  <a
                    href={item.link}
                    className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors duration-300 px-2 py-1"
                    aria-current={
                      item.link === window.location.pathname
                        ? "page"
                        : undefined
                    }
                  >
                    {item.name}
                  </a>
                  {index < NavItems.length - 1 && (
                    <span className="text-yellow-500 text-2xl font-bold mx-2">
                      {"|"}
                    </span>
                  )}
                </li>
              ))}
              {/* Theme Toggle */}
              <li className="px-4">
                <div
                  className="relative inline-block w-14 h-7 mt-2 cursor-pointer overflow-hidden rounded-full"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  role="switch"
                  aria-checked={theme === "dark"}
                >
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      theme === "dark" ? "bg-blue-800" : "bg-gray-600"
                    }`}
                  />
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-sm ${
                      theme === "dark" ? "translate-x-7" : "translate-x-1"
                    }`}
                  >
                    {theme === "dark" ? "🌙" : "☀️"}
                  </div>
                </div>
              </li>
              {/* User Profile */}
              <li>
                <UserProfileNav />
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-72 bg-pink-600 z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex-1 space-y-6">
              {/* User Profile for Mobile */}
              <div className="pt-4 border-t border-gray-700">
                <UserProfileNav isMobile={true} />
              </div>

              {/* Mobile Nav Items */}
              <ul className="space-y-4 pt-2">
                {NavItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="text-lg font-semibold text-white hover:text-yellow-500 transition-colors duration-300 block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Theme Toggle */}
            <div className="mt-auto pt-6">
              <div className="flex items-center justify-between">
                <span className="text-white text-sm">Theme</span>
                <div
                  className="relative inline-block w-14 h-7 cursor-pointer overflow-hidden rounded-full"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  role="switch"
                  aria-checked={theme === "dark"}
                >
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      theme === "dark" ? "bg-blue-800" : "bg-gray-600"
                    }`}
                  />
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-sm ${
                      theme === "dark" ? "translate-x-7" : "translate-x-1"
                    }`}
                  >
                    {theme === "dark" ? "🌙" : "☀️"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-30 lg:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}
