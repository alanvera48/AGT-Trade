import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-2 bg-gray-800 pt-6 md:pt-12">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div className="footer-info lg:w-1/3 md:px-4">
            <h4 className="text-white text-2xl mb-4">
              Creemos en nosotros y en acompanarte en este complejo mundo de los
              negocios
            </h4>
            <p className="text-gray-400">
              Trade and Broker.
            </p>
            <div className="mt-4">
              <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                AGT Trade
              </button>
              <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                info@agtmtrade.com
              </button>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  About
                </h6>
                <div>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">
                    Company
                  </a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">
                    Culture
                  </a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">
                    Team
                  </a>
                  <a href="#" className="text-gray-400 py-1 block hover:underline">
                    Careers
                  </a>
                </div>
              </div>
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  Servicios
                </h6>
                <div>
                  <a href="#" className="text-gray-400 py-1 block ">
                    Exportacion
                  </a>
                  <a href="#" className="text-gray-400 py-1 block ">
                    Asesoria bancaria
                  </a>
                  <a href="#" className="text-gray-400 py-1 block ">
                    Importacion
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
            <h5 className="text-lg text-white font-medium mb-4">
              Explore our site
            </h5>
            <button className="bg-indigo-600 text-white hover:bg-indigo-700 py-2 px-6 md:px-12 transition-colors duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-900 mt-4 py-4">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">
                &copy; Copyright 2021. Todos los derechos reservados
              </p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
