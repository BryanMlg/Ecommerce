import React, { useRef } from "react";
import Style from "@style/Login.module.scss";
import Logo from "@assets/logo_yard_sale.svg";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { authContext } from "@context/ContextApp";
import { useContext } from "react";
export default function Login ()  {
  const form = useRef(null);
  const auth = useContext(authContext);
	const HandleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		};
		auth.signIn(data.username, data.password).then(() => {
      Router.push('/dashboard');
    });
	};
  return (
    <div className={Style["Main-Container"]}>
      <div className={Style.Container}>
        <Image className={Style.Logo} src={Logo} alt="Logo" />
        <h1 className={Style.Titulo}>Iniciar Sesion</h1>
        <form action="/" ref={form}>
          <input
            id="IngresarEmail"
            type="Email"
            name="email"
            placeholder="Email"
            className={Style["Input-Email"]}
          />
          <input
            id="Password"
            name="password"
            type="Password"
            placeholder="Password"
            className={Style["Input-Email"]}
          />
          <button id="BotonC" className={Style["primary-button"]} onClick={HandleSubmit}>
            Login
          </button>
        </form>
        <Link href="/new-account" className={Style["secondary-button"]} >
          Register
        </Link>
      </div>
    </div>
  );
};
