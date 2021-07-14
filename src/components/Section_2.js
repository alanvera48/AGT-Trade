import React from "react";
import { NavLink } from "react-router-dom";
import "./Section_2.css";

export default function Section_2() {
  return (
    <div className="section section-2">
      <h2>Construimos tu exito</h2>
      <p>
        Somos una consultora que brinda asesoramiento a pequeñas y medianas
        empresas <span>
           ofreciendo una atención personalizada y profesional en toda la
          operatoria internacional.
        </span>
      </p>
      <button className="btn-section-2 bg-white hover:bg-black hover:text-white text-black border border-black  py-2 px-4 ">
        <NavLink exact to='/about'>conocenos</NavLink>
      </button>
    </div>  
  );
}
