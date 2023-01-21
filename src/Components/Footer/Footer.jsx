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
        <div className="Box-column">
          <div className="Box-Row-1">
            <div className="Box-1">
              <img src={logo} alt="Techspardha_Icon" className="ts-logo2" />
            </div>
            <div className="Box-2">
              <div className="Part1">
                <div className="column1">
                  <ul className="">
                    <li>
                      <Link to={{ pathname: "/", hash: "#sponsors" }}>
                        <span className="text-white">Sponsors</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="column2">
                  <ul className="">
                    <li>
                      <Link to={{ pathname: "/", hash: "#events" }}>
                        <span className="text-white">Events</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={{ pathname: "/", hash: "#lectures" }}>
                        <span className="text-white">Lectures</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Part2">
                <div className="column3">
                  <ul className="">
                    <li>
                      <Link to="/about">
                        {" "}
                        <span className="text-white"> About </span>{" "}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/team">
                        {" "}
                        <span className="text-white">
                          {" "}
                          Team Techspardha{" "}
                        </span>{" "}
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
                <div className="column4">
                  <ul className="">
                    {/* <li>
                      <a href="#!" className="text-white">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Team Techspardha
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </footer>
    </>
  );
}
