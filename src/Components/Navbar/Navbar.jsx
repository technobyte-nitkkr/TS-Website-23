import "./Navbar.css";
// import logo from "/assets/TS_LOGO.svg";
import logo from "/assets/Techspardha.svg";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Techspardha" className="ts-logo" />
      <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div className="navbar-links">
      <ul className="navMenus">
      <li className="navbarItem Buttonclose">
      <a href="/close">Close X</a>
        </li>
        <li className="navbarItem">
          <a href="/events">EVENTS</a>
        </li>
        <li className="navbarItem">
          <a href="/sponsors">SPONSORS</a>
        </li>
        <li className="navbarItem">
          <a href="/lectures">LECTURES</a>
        </li>
        <li className="navbarItem">
          <a href="/about">ABOUT</a>
        </li>
        <li className="navbarItem">
          <a href="/discord">DISCORD</a>
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
    </nav>
  );
}
