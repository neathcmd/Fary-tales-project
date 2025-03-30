import "./App.css";
import { ThemeProvider } from "./App/Ui/ThemeContext";
import Navber from "./components/Navbar";
import Home from "./App/Home/Home";

function App() {
  return (
    <ThemeProvider>
      <Navber />
      <main>
        <Home />
      </main>
    </ThemeProvider>
  );
}

export default App;
