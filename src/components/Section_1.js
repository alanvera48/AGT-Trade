import React from "react";
import { NavLink } from "react-router-dom";
import "./Section_1.css";

export default function Section_1() {

  return (
    <section className="section section-1 ">
      <h1>AGTM TRADE</h1>
      <span>
        Creemos en nosotros y en acompanarte en este complejo mundo de los
        negocios
      </span>
      <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 btn-section">
        <NavLink exact to="/contact">
          Contactanos
        </NavLink>
      </button>
      <hr />
    </section>
  );
}
