import React from "react";
import "@style/Login.scss";

export default function Login ()  {
  return (
    <div className="Main-Container">
      <div className="Container">
        <img className="Logo" src="@assets/logo_yard_sale.svg" alt="Logo" />
        <h1 className="Titulo">Iniciar Sesion</h1>
        <form action="submit">
          <label className="FormLabel" htmlFor="Email">
            Email
          </label>
          <input
            id="IngresarEmail"
            type="Email"
            placeholder="Email"
            className="Input-Email"
          />
          <label className="FormLabel" htmlFor="Password">
            Contraseña
          </label>
          <input
            id="Password"
            type="Password"
            placeholder="******"
            className="Input-Email"
          />
          <button id="BotonC" className="primary-button" type="submit">
            Iniciar Sesion
          </button>
        </form>
        <button id="BotonB" className="secondary-button" type="submit">
          Registrarse
        </button>
      </div>
    </div>
  );
};
