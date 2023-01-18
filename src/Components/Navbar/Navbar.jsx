import "./Navbar.css";
// import TSlogo from "/assets/TS_LOGO.svg";
import logo from "/assets/Techspardha.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* <div className="logosContainer"> */}
      {/* <img src={TSlogo} alt="TSLogo" className="ts-logo-icon" /> */}
      <img src={logo} alt="Techspardha" className="ts-logo" />
      {/* </div> */}
      <ul className="navMenus">
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
        <Link to="/team">
          <li className="navbarItem">
            <a href="">TEAM</a>
          </li>
        </Link>
        <li className="navbarItem">
          <Button
            symbol={"▶️"}
            btnText={"Login"}
            btnHeight="100%"
            btnWidth={"100%"}
          />
        </li>
      </ul>
    </nav>
  );
}
