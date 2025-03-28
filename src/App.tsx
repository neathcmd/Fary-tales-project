// src/App.tsx
import { ThemeProvider } from "./App/Ui/ThemeContext";
import { ButtonToggle } from "./App/Ui/ButtonToggle";
// import { Hero } from "./components/Hero";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <header className="p-4">
          <div className="flex justify-end">
            <ButtonToggle />
          </div>
        </header>
        <main className="p-4">
          {/* <Hero /> */}
          <h1 className="text-2xl font-bold">
            Welcome to My App! (Current Theme:{" "}
            <span className="text-blue-500 dark:text-blue-300">
              {document.documentElement.classList.contains("dark")
                ? "Dark"
                : "Light"}
            </span>
            )
          </h1>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
