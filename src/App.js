import react from "react";
import "./App.css";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Talktherapy from "./Components/Talktherapy";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Talktherapy />
      <Footer />
    </div>
  );
}

export default App;
