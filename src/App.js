
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";
// import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
// import Talktherapy from "./Components/Talktherapy";
import Footer from "./Components/Footer";

import JoinCommunity from "./Components/JoinCommunity";



function App() {
  return (
    <div className="App">
      <Navbar />
 <JoinCommunity/>
     
  
      <Footer />
    </div>
  );
}

export default App;
