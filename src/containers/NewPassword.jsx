import React from "react";
import "../style/NewPassword.scss";
const NewPass = () => {
  return (
    <div className="Main-Container">
      <div className="Container">
        <img className="Logo" src="/Assets/logo_yard_sale.svg" alt="Logo" />
        <h1 className="Titulo">Crear nueva contraseña</h1>
        <p className="Parrafo">Ingresa nueva contraseña para tu cuenta</p>
        <form action="submit">
          <label className="LabelPassword" htmlFor="Password">
            Contraseña
          </label>
          <input
            id="IngresarContraseña"
            type="Password"
            placeholder="******"
            className="Input-Contraseña"
          />
          <label className="Re-LabelPassword" htmlFor="Re-Password">
            Re-Escriba Contraseña
          </label>
          <input
            id="Re-IngresarContraseña"
            type="Password"
            placeholder="******"
            className="Input-Contraseña"
          />
          <button id="BotonC" className="primary-button" type="submit">
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPass;
