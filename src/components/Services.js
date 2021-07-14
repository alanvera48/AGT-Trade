import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
      <div className="section us-section section-services">
        <div className="section-box-us services-section-box">
          <h4>Nuestros Servicios</h4>
          <span>
            Nos especializamos en darte las mejores coberturas en cuanto a Trade
            and Broker.
          </span>
        </div>
      </div>
      <div className="section-service-box">
        <img src="/images/importacion.jpg" alt="" />
        <div className="section-service-box-text">
          <h4>EXPORTACIÓN</h4>
          <p>
            Para una empresa sin experiencia en Comercio internacional, es muy
            difícil tomar la decisión de exportar. Por ello, asesoramos a
            aquellas empresas que deseen su internacionalización sobre cuál es
            el camino correcto y que decisio- nes y estrategias tomar para que
            su experiencia sea exitosa. <br />
            <br />
            El Proceso de Internacionalización de una Empresa es esencial para
            poder mantenerse en un entorno cada vez ms globalizado, es el paso
            previo a cualquier actividad exportadora, por ello es fundamental
            conocer a qué países exportar, quienes son los posibles comprado-
            res, conocer las legislaciones locales y de destino, documentación
            necesaria, etc.
            <br />
            <br /> En AGT  Trade , realizamos la investiga- ción de
            mercado con el fin de conocer los destinos más adecuados donde la
            empresa pueda ingresar sus productos o servicios y cuál es la mejor
            forma estratégica de realizarlo para que pueda realizar su
            exportación sin inconve- nientes ni contratiempos , encargándonos de
            toda la operatoria comercial, aduanera y bancaria:
          </p>
        </div>
      </div>
      <div className="section-service-box importacion">
        <div className="section-service-box-text">
          <h4>IMPORTACIÓN</h4>
          <p>
            En AGT Trade lo asesoramos sobre los requisitos, normativas
            y documentación nece- saria para poder ingresar al país el producto
            que su empresa desea importar. <br />
            <br /> - Clasificación Arancelaria de la mercadería <br />-
            Asesoramiento sobre fletes internacionales (marítimos, aéreos y
            terrestres) <br />- Normativa vigente y gestión Bancaria Asimismo,
            realizamos la búsqueda de poten- ciales proveedores en el mercado
            internacio- nal, realizando el análisis necesario de los mismos para
            su mejor elección
          </p>
        </div>
        <img src="/images/exportacion.jpg" alt="" />
      </div>
      <div className="section-service-box">
        <img src="/images/asesoria.jpg" alt="" />
        <div className="section-service-box-text">
          <h4>ASESORÍA BANCARIA</h4>
          <p>
            Toda compra o venta internacional debe reali- zarse bajo una
            condición de pago que implica la necesidad de efectuar pagos y
            cobranzas entre partes ubicadas en diferentes países por lo que es
            imprescindible conocer los diferente medios de pago que existen y
            que más se adapten a sus necesidades. <br />
            <br /> Es por ello, que la elección del más apropiado dependerá de
            los costos, exigencias cambiarías y normativas y de la confianza
            entre las partes, por lo que lo asesoramos sobre el más conveniente,
            menos riesgoso y sobre los plazos a tener en cuenta según el medio
            de pago elegido.
          </p>
        </div>
      </div>
      <div className="section-service-box logistica">
        <div className="section-service-box-text">
          <h4>LOGÍSTICA</h4>
          <p>
            Exigencia, celeridad y urgencia es lo que priori- zan nuestros
            clientes al optar por utilizar este medio de transporte. Dentro de
            este servicio, podemos ofrecer tanto para importación como
            exportación: <br />
            Es el servicio más requerido por los clientes con grandes volúmenes,
            y que priorizan a su vez un bajo costo para la exportación/importa-
            ción de sus mercaderías. Gracias a nuestra vasta experiencia,
            brindamos los siguientes servicios:
          </p>
        </div>
        <img src="/images/logistica.jpg" alt="" />
      </div>
    </>
  );
}
