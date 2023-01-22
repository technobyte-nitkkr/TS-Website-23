import "./Navbar.css";
import logo from "/assets/Techspardha.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import TimeLine from "../Timeline/TimeLine";
import { useState } from "react";

export default function Navbar({ setProfileVisible }) {
  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      //  get token id
      console.log(credentialResponse);
      const TOKEN = credentialResponse.credential;

      if (localStorage.getItem("ts20token")) {
        const data = JSON.parse(localStorage.getItem("userdata"));
        const token = localStorage.getItem("ts20token");
        return;
      }

      try {
        const response = await axios.post("/login", {
          idToken: TOKEN,
        });
        console.log(response.data);

        console.log("HERE");
        // console.log();
        const JWT = response.data.data.token;

        // set token in local storage

        localStorage.setItem("ts20token", JWT);
        localStorage.setItem(
          "userdata",
          JSON.stringify(response.data.data.user)
        );
      } catch (error) {
        console.log(error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  // const [isOpen, setIsOpen] = useState(false);
  // const closeOverlay = () => setIsOpen(false);

  return (
    <nav className="nav">
      {/* <TimeLine show={isOpen} onClickOutside={closeOverlay} /> */}
      <Link to="/" className="logoLink">
        <img src={logo} alt="Techspardha" className="ts-logo" />
      </Link>

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
              <span>EVENTS</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#sponsors" }}>
              <span>SPONSORS</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#lectures" }}>
              <span>LECTURES</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#about" }}>
              <span>ABOUT</span>
            </Link>
          </li>
          <li className="navbarItem">
            <a href="/team">
              <span>TEAM</span>
            </a>
          </li>
          <li className="navbarItem Button1">
            {localStorage.getItem("ts20token") ? (
              <span
                onClick={() => {
                  setProfileVisible(true);
                }}
              >
                Profile
              </span>
            ) : (
              <span>
                {" "}
                <Button
                  symbol={"▶️"}
                  btnText={"Login"}
                  btnHeight="100%"
                  btnWidth={"100%"}
                />{" "}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
