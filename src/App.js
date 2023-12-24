
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "./App.css";
// import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
// import Talktherapy from "./Components/Talktherapy";
import Footer from "./Components/Footer";
import JoinCommunity from "./Components/JoinCommunity";



function App() {
  return (
    <div className="App">
      <Navbar />
      <JoinCommunity/>
      {/* <About />
      <Home/>
  
      <Talktherapy /> */}
      <Footer />
    </div>
  );
}

export default App;
