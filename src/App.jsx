import "./App.css";
import image from "/assets/Main-background.svg";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Homecontainer from "./Components/Homecontainer/Homecontainer";
import Footer from "./Compoents/Footer/footer";


function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "#000000",
        height: "100vh",
        margin: "0px",
        padding: "0px",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div>
        <Navbar />
      </div>
      <HomePage />
      <Homecontainer />
      <Footer/>
    </div>
  );
}

export default App;
