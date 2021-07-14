import React from "react";
import "./Us_3.css";
import { NavLink } from "react-router-dom";

export default function Us_3() {
  return (
    <div className="us-section-3">
      <span className='span-section-3'>
        Solicite unirse a una comunidad de corredores y agentes de clase
        mundial.
      </span>
      <button className="btn-section-us btn-section-2 bg-black hover:bg-opacity-0 hover:text-white text-white border border-black  py-2 px-4 btn-section3">
        <NavLink exact to="/contact">
          Contactanos
        </NavLink>
      </button>
    </div>
  );
}
