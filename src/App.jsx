import "./App.css";
import image from "/assets/background.svg";
import HomePage from "./Compoents/HomePage/HomePage";
import Navbar from "./Compoents/Navbar/Navbar";
import Footer from "./Compoents/Footer/footer";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        margin: "0px",
        padding: "0px",
        overflowY: "scroll",
        overflowX: "hidden",
        // "-webkit-scrollbar": "none",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Navbar />
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
