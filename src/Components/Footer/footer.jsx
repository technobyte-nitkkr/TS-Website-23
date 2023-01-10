import "./Footer.css";
// import logo from "/assets/TS_LOGO.svg";
import logo from "/assets/Techspardha.svg";
import {FaGithub,FaFacebookSquare,FaTwitter,FaLinkedinIn,FaYoutube,FaTwitch,FaTiktok,FaCopyright} from "react-icons/fa";
import Button from "../Button/Button";

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
                            <div className="column">

                                <ul class="">
                                    <li>
                                        <a href="#!" class="text-white">Product</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Features</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Security</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Team</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Enterprise</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Customer Stories</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">The readME Project</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Resources</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Roadmap</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="column">

                                <ul class="">
                                    <li>
                                        <a href="#!" class="text-white">Platform</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Developer API</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Partners</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Electron</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Github Desktop</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="column">

                                <ul class="">
                                    <li>
                                        <a href="#!" class="text-white">Support</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Docs</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Community Forum</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Profesional Services</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Skills</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Status</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Contact Github</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="column">

                                <ul class="">
                                    <li>
                                        <a href="#!" class="text-white">Company</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">About</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Press</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Inclusion</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Social Impact</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Shop</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="Box-Row-2">
                        <div className="ul1">
                            <FaCopyright className="icons"/><p>2022Technobyte,Inc.</p>
                            <p>Terms</p>
                            <p>Privacy(Updated 08/2022)</p>
                            <p>Site Map</p>
                            <p>What is Git?</p>
                        </div>
                        <div class="footer-menu">
                        <ul className="ul2">
                       <li><FaTwitter className="icons"/></li>
                      <li> <FaFacebookSquare className="icons"/></li>
                      <li> <FaLinkedinIn className="icons"/></li>
                       <li><FaYoutube className="icons"/></li>
                       <li><FaTwitch className="icons"/></li>
                       <li><FaTiktok className="icons"/></li>
                       <li><FaGithub className="icons"/></li>
                       </ul>
                       </div>
                    </div>
                </div>
            </footer>


        </>
    );
}
