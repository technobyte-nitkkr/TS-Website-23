import "./Navbar.css";
// import TSlogo from "/assets/TS_LOGO.svg";
import logo from "/assets/Techspardha.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* <div> */}
      <div className="logo-div">
      <Link to="/" className="logoLink">
        <img src={logo} alt="Techspardha" className="ts-logo" />
      </Link>
      </div>
      <div
        href="#"
        class="toggle-button"
        onClick={() => {
          document.getElementById("toToggle").style.visibility = "visible";
        }}
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div className="navbar-links" id="toToggle">
        <ul className="navMenus">
          <li className="navbarItem Buttonclose">
            <div
              href="#"
              onClick={() => {
                document.getElementById("toToggle").style.visibility = "hidden";
              }}
            >
              Close X
            </div>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#events" }}>
              <a href="/events">EVENTS</a>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#sponsors" }}>
              <a href="/sponsors">SPONSORS</a>
            </Link>
          </li>
          <li className="navbarItem">
            <a href="/lectures">LECTURES</a>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#about" }}>
              <a href="/about">ABOUT</a>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/team">
              <a href="">TEAM</a>
            </Link>
          </li>
          <li className="navbarItem Button1">
            <Button
              symbol={"▶️"}
              btnText={"Login"}
              btnHeight="100%"
              btnWidth={"100%"}
            />
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
}
