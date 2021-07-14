import React from "react";
import "./Us.css";
import Us_2 from "./Us_2";
import Us_3 from "./Us_3";

export default function Us() {
  return (
    <>
      <div className="section us-section">
        <div className="section-box-us">
          <h4>Sobre Nosotros</h4>
          <span>
            Brindamos asesoria de punta y herramientas de marketing a agentes y
            corredores inmobiliarios, consiguiendo los mejores productos al mejor precio.
          </span>
        </div>
        <div className="img-box-us">
          <img src="/images/importacion.jpg" alt="" />
          <img src="/images/exportacion.jpg" alt="" className="img-2" />
          <img src="/images/us.jpg" alt="" className="img-3" />
        </div>
      </div>
      <Us_2></Us_2>
      <Us_3></Us_3>
    </>
  );
}
