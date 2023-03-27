import React from "react";
import "@style/CreateAccount.scss";

export default function CreateAccount () {
    return (
        <div className="Main-Container">
        <div className="Container">
            <h1 className="Titulo">
                Mi Cuenta
            </h1>
            <form action="submit">
                
                <label className="FormLabel" htmlFor="Nombre">Nombre</label>
                <input id="Nombre" 
                type="text"
                placeholder="Ingresa tu nombre"
                className="Datos"
                />
                <label className="FormLabel" htmlFor="Email">Email</label>
                <input id="Email" 
                type="email"
                placeholder="Ingresa tu email"
                className="Datos"
                />
                <label className="FormLabel" htmlFor="Password">Contraseña</label>
                <input id="Password" 
                type="password"
                placeholder="******"
                className="Datos"
                />
                <button id="BotonC" className="primary-button" type="submit">Crear</button>
            </form>
            
        </div>
    </div>
    );
}