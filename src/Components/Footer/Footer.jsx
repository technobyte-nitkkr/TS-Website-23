import "./Footer.css";
import logo from "/assets/Techspardha.svg";
import {
  FaGithub,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTwitch,
  FaTiktok,
  FaCopyright,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="Box-Row-2">
          <div className="ul1">
            <p>Developed with ❤️ by Technobyte</p>
          </div>
          <div className="footer-menu">
            <ul className="ul2">
              <li>
                <a href="https://www.instagram.com/technobyte_nitkkr/">
                  <FaInstagram size={"1.3em"} className="icons" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/techn0byte/">
                  <FaFacebookSquare size={"1.3em"} className="icons" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/technobyte-nitkkr/">
                  <FaLinkedinIn size={"1.3em"} className="icons" />
                </a>
              </li>
              <li>
                <a href="https://github.com/technobyte-nitkkr">
                  <FaGithub size={"1.3em"} className="icons" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
