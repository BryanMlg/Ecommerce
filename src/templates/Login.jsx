import React, { useRef } from "react";
import "@style/Login.scss";
import Logo from "@assets/logo_yard_sale.svg";
import Image from "next/image";
export default function Login ()  {
  const form = useRef(null);
	const HandleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data);
	};
  return (
    <div className="Main-Container">
      <div className="Container">
        <Image className="Logo" src={Logo} alt="Logo" />
        <h1 className="Titulo">Iniciar Sesion</h1>
        <form action="/" ref={form}>
          <label className="FormLabel" htmlFor="Email">
            Email
          </label>
          <input
            id="IngresarEmail"
            type="Email"
            name="email"
            placeholder="Email"
            className="Input-Email"
          />
          <label className="FormLabel" htmlFor="Password">
            Contraseña
          </label>
          <input
            id="Password"
            name="password"
            type="Password"
            placeholder="******"
            className="Input-Email"
          />
          <button id="BotonC" className="primary-button" onClick={HandleSubmit}>
            Iniciar Sesion
          </button>
        </form>
        <button id="BotonB" className="secondary-button" onClick={HandleSubmit}>
          Registrarse
        </button>
      </div>
    </div>
  );
};
