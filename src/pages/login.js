import React, { useRef } from "react";
import Style from "@style/Login.module.scss";
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
    <div className={Style["Main-Container"]}>
      <div className={Style.Container}>
        <Image className={Style.Logo} src={Logo} alt="Logo" />
        <h1 className={Style.Titulo}>Iniciar Sesion</h1>
        <form action="/" ref={form}>
          <label className={Style.FormLabel} htmlFor="Email">
            Email
          </label>
          <input
            id="IngresarEmail"
            type="Email"
            name="email"
            placeholder="Email"
            className={Style["Input-Email"]}
          />
          <label className={Style.FormLabel} htmlFor="Password">
            Contraseña
          </label>
          <input
            id="Password"
            name="password"
            type="Password"
            placeholder="******"
            className={Style["Input-Email"]}
          />
          <button id="BotonC" className={Style["primary-button"]} onClick={HandleSubmit}>
            Iniciar Sesion
          </button>
        </form>
        <button id="BotonB" className={Style["secondary-button"]} onClick={HandleSubmit}>
          Registrarse
        </button>
      </div>
    </div>
  );
};
