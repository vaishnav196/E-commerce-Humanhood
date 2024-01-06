
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Talktherapy from "./Components/Talktherapy";
import Footer from "./Components/Footer";
// import Sliders from "./Components/Sliders";
import JoinCommunity from "./Components/JoinCommunity";
import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";
import Blog from './Components/Blog';




function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About/' element={<About/>}/>
        <Route path='Talktherapy/' element={<Talktherapy/>}/>
        <Route path='Blog/' element={<Blog/>}/>
        <Route path='JoinCommunity/' element={<JoinCommunity/>}/>

      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
