import React from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="limpieza">
        <div className="max-w-screen-md mx-auto p-5 form">
          <div className="text-center mb-16">
            <p className="text-sm leading-7 text-gray-500 font-regular uppercase p-h1-contact">
              Descubra por qué más de 2500 agentes y companias de élite confían
              en AGT Trade
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white h3-contact">
              Le daremos una vista previa gratuita de Luxury Presence y le
              mostraremos por qué más de 20 de los agentes Top 100 de WSJ
              confían en nosotros con su presencia en línea.
            </h3>
          </div>
          <form className="w-full contact-form">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200x py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="nombre"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  pattern="^[a-zA-ZÀ-ÿ\s]{1,40}$"
                  required=""
                  title="Must completed with letter and white space"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  name="apellido"
                  pattern="^[a-zA-ZÀ-ÿ\s]{1,40}$"
                  required=""
                  title="Must completed with letter and white space"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white  text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                  pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                  required=""
                  name="email"
                  title="Must completed with letter and white space"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white  text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required=""
                  title="Text must be at less 255 caracters"
                  name="texto"
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <button
                  className="bg-yellow-600 text-white font-bold py-2 px-4 btn-color btn-message"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
