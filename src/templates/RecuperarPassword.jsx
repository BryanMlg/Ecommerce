import React from "react";
import "@style/RecuperarPassword.scss";
import Logo from "@assets/logo_yard_sale.svg";
import EmailLogo from "@assets/email.svg";
import Image from "next/image";
export default function RecuperarPassword() {
  return (
    <div className="Main-Container">
      <div className="Container">
        <Image className="Logo" src={Logo} alt="Logo" />
        <h1 className="Titulo">¡Email Enviado!</h1>
        <p className="Subtitulo">
          Porfavor revisa tu bandeja para mas instrucciones de como cambiar tu
          contraseña
        </p>
        <div className="Logo-Container">
          <Image className="LogoEmail" src={EmailLogo} alt="LogoEmail" />
        </div>
        <button id="BotonI" className="primary-button" type="submit">
          Ingresar
        </button>
        <p className="NullEmail">
          <span>¿No recibiste un correo?</span>
          <a href="*">Re-enviar</a>
        </p>
      </div>
    </div>
  );
}
