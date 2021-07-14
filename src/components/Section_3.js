import React from "react";
import "./Section_3.css";
import { NavLink } from "react-router-dom";

export default function Section_3() {
  return (
    <div className="section section-3">
      <div className="section-3-box">
        <div className="service-section">
          <img src="/images/exportacion.jpg" alt="" />
          <span className="span-1">Exportacion</span>
          <span className="span-2">
            Asesoramos a aquellas empresas que deseen su internacionalización
            sobre cuál es el camino correcto y que decisiones y estrategias
            tomar para que su experiencia sea exitosa.
          </span>
          <h5></h5>
        </div>
        <div className="service-section">
          <img src="/images/asesoria.jpg" alt="" />
          <span className="span-1">Asesoria</span>
          <span className="span-2">
            Asesoramos sobre el más conveniente, menos riesgoso y sobre los
            plazos a tener en cuenta según el medio de pago elegido.
          </span>
          <h5></h5>
        </div>
        <div className="service-section">
          <img src="/images/importacion.jpg" alt="" />
          <span className="span-1">Importacion</span>
          <span className="span-2">
            Asesoramos sobre los requisitos, normativas y documentación nece-
            saria para poder ingresar al país el producto que su empresa desea
            importar.
          </span>
          <h5></h5>
        </div>
      </div>
      <button className="btn-section-2 bg-white hover:bg-black hover:text-white text-black border border-black  py-2 px-4 btn-section3">
        <NavLink exact to='/about'>Ver Servicios</NavLink>
      </button>
    </div>
  );
}
