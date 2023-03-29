import React, { useState } from "react";
import "@style/Header.scss";
import MenuLogo from "@assets/icon_menu.svg";
import Logo from  "@assets/logo_yard_sale.svg";
import SubFlecha from "@assets/flechita.svg";
import Carrito from "@assets/icon_shopping_cart.svg";
import Menu from "@components/Menu.jsx";
const Header = () => {
  const [toggle, setToogle] = useState(false);
  const toggleState = () =>{
    setToogle(!toggle);
  }
  return (
    <header>
      <nav>
        <img className="Menu" src={MenuLogo} alt="Menu" />
        <div className="Left">
            <img className="Logo" src={Logo} alt="Logo"/>
          <ul className="ListaLeft">
            <li><a href="">Todo</a></li>
            <li><a href="">Ropa</a></li>
            <li><a href="">Electronicos</a></li>
            <li><a href="">Muebles</a></li>
            <li><a href="">Juguetes</a></li>
            <li><a href="">Otros</a></li>
          </ul>
        </div>
        <div className="Right">
          <ul>
            <li className="Email" onClick={toggleState}>
                bryanmlg2018@gmail.com
                <img className="SubMenu" src={SubFlecha} alt="Flechita"/>
            </li>
            <li className="Shopping">
              <img className="Carrito" src={Carrito} alt="Carrito" />
              <div></div>
            </li>
          </ul>
        </div>
        {toggle && <Menu/>}
      </nav>
    </header>
  );
}
export default Header;