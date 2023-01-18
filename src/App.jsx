import "./App.css";
import image from "/assets/Main-background.svg";
import Navbar from "./Components/Navbar/Navbar";
import Homecontainer from "./Components/Homecontainer/Homecontainer";
import Footer from "./Components/Footer/Footer";
import Sponsors from "./Components/Sponsors/Sponsors";
import TestimonialCarousel from "./Components/Testimonial/Carousel/TestimonialCarousel";
import EventCarousel from "./Components/Events/Carousel/EventCarousel";
import TimeLine from "./Components/Timeline/TimeLine";
import Registration from "./Components/Registration/Registration";
import Team from "./Pages/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "#000000",
        height: "100vh",
        margin: "0px",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Router>
        <div className="home-div">
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
