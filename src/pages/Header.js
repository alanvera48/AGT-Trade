import React from "react";
import NavRouter from "../components/NavRouter";
import "./Header.css";

export default function Header() {
  window.addEventListener("scroll", (e) => {
    let scroll = document.documentElement.scrollTop;
    let li = document.querySelectorAll(".li-toggle");
    let $header = document.querySelector(".navigation-header");
    let header_contain = $header.classList.contains("navigation-scroll")
    if (scroll > 100) {
      if(!header_contain) $header.classList.add("navigation-scroll");
      li.forEach((element) => {
        element.classList.add("li-backgrund");
      });
    } else {
      $header.classList.remove("navigation-scroll");
      li.forEach((element) => {
        element.classList.remove("li-backgrund");
      });
    }
  });

  return (
    <header className="navigation-header">
      <NavRouter></NavRouter>
    </header>
  );
}
