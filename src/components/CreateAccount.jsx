import React from 'react';
import Style from '@style/CreateAccount.module.scss';

export default function CreateAccount () {
    return (
        <div className={Style["Main-Container"]}>
        <div className={Style.Container}>
            <h1 className={Style.Titulo}>
                New Account
            </h1>
            <form action="submit">.
                <label className={Style.FormLabel} htmlFor="Name">Name</label>
                <input id="Nombre" 
                type="text"
                placeholder="Ingresa tu nombre"
                className={Style.Datos}
                />
                <label className={Style.FormLabel} htmlFor="Email">Email</label>
                <input id="Email" 
                type="email"
                placeholder="Ingresa tu email"
                className={Style.Datos}
                />
                <label className={Style.FormLabel} htmlFor="Password">Password</label>
                <input id="Password" 
                type="password"
                placeholder="******"
                className={Style.Datos}
                />
                <button className={Style["primary-button"]} type="submit">Register</button>
            </form>
            
        </div>
    </div>
    );
}