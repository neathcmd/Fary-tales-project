import "./App.css";
import { ThemeProvider } from "./App/Ui/ThemeContext";
import Navber from "./components/Navbar";
import Home from "./App/Home/Home";

function App() {
  return (
    <ThemeProvider>
      <Navber />
      <Home />
    </ThemeProvider>
  );
}

export default App;
