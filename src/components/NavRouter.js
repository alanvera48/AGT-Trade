import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/Header.css";

export default function NavRouter() {
  let handleToggle = (e) => {
    let _d = e.target;
    let li = document.querySelectorAll(".li-toggle");
    let _nav = document.querySelector(".navbar-nav");
    _nav.classList.toggle("toggle-nav");
    _nav.classList.toggle("nav-ul-responsive");
    li.forEach((element) => {
      element.classList.toggle("li-backgrund");
    });
  };

  return (
    <nav className="navbar ">
      <NavLink exact to="/">
        <img src="/images/logo-page.png" alt="logo" className="img-logo" />
      </NavLink>
      <button className="navbar-toggle" onClick={(e) => handleToggle(e)}>
        <ul className="navabar-toggle-ul">
          <li className="li-toggle"></li>
          <li className="li-toggle"></li>
          <li className="li-toggle"></li>
          <li className="li-toggle"></li>
        </ul>
      </button>
      <ul class="navbar-nav ">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            HOME
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about" className="nav-link">
            ABOUT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/service" className="nav-link">
            SERVICE
          </NavLink>
        </li>
        <button class="bg-indigo-600  text-white font-bold py-2 px-4 btn-color">
          <NavLink exact to="/contact" className="">
            CONTACT
          </NavLink>
        </button>
      </ul>
    </nav>
  );
}
