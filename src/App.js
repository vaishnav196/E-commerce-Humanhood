
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "./App.css";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Talktherapy from "./Components/Talktherapy";

import Navbar from "./Components/Navbar";

import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Home/>
  
      <Talktherapy />
      <Footer />
    </div>
  );
}

export default App;
