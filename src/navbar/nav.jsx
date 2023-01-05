import React from "react";
import './style.css';
import logo from '../assets/navbar/ts_logo.png';
import btn from '../assets/navbar/login_btn.png';

export default function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="" className="ts-logo"/>

      <ul>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/sponsors">Sponsors</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/lectures">Lectures</a>
        </li>
        <li>
          <img src={btn} alt=""/>
        </li>
      </ul>
    </nav>
  )
}
