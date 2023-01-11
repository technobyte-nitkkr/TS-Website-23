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
} from "react-icons/fa";


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
                    <a href="#!" className="text-white">
                      Product
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Customer Stories
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      The readME Project
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>

              <div className="column2">
                <ul className="">
                  <li>
                    <a href="#!" className="text-white">
                      Platform
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Developer API
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Electron
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Github Desktop
                    </a>
                  </li>
                </ul>
              </div>
              </div>
              <div className="Part2">
              <div className="column3">
                <ul className="">
                  <li>
                    <a href="#!" className="text-white">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Docs
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Community Forum
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Profesional Services
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Status
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column4">
                <ul className="">
                  <li>
                    <a href="#!" className="text-white">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Inclusion
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Social Impact
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Shop
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          <div className="Box-Row-2">
            <div className="ul1">
              <FaCopyright className="icons" />
              <p >2022Technobyte,Inc.</p>
              <p>Terms</p>
              <p>Privacy(Updated 08/2022)</p>
              <p>Site Map</p>
              <p>What is Git?</p>
            </div>
            <div className="footer-menu">
              <ul className="ul2">
                <li>
                  <FaTwitter size={'1.3em'} className="icons" />
                </li>
                <li>
                  {" "}
                  <FaFacebookSquare size={'1.3em'} className="icons" />
                </li>
                <li>
                  {" "}
                  <FaLinkedinIn size={'1.3em'} className="icons" />
                </li>
                <li>
                  <FaYoutube size={'1.3em'} className="icons" />
                </li>
                <li>
                  <FaTwitch size={'1.3em'} className="icons" />
                </li>
                <li>
                  <FaTiktok size={'1.3em'} className="icons" />
                </li>
                <li>
                  <FaGithub size={'1.3em'} className="icons" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
