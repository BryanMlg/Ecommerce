import React, { useContext, useState } from "react";
import "@style/Header.scss";
import MenuLogo from "@assets/icon_menu.svg";
import Logo from  "@assets/logo_yard_sale.svg";
import SubFlecha from "@assets/flechita.svg";
import Carrito from "@assets/icon_shopping_cart.svg";
import Menu from "@components/Menu.jsx";
import ContextApp from "@context/ContextApp.js";
import MyOrder from "../containers/MyOrder.jsx";
const Header = () => {
  const [toggle, setToogle] = useState(false);
  const [toggleCart, setToogleCart] = useState(false);
  const {state:{cart}} = useContext(ContextApp);
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
            <li className="Email" onClick={() => setToogle(!toggle)}>
                bryanmlg2018@gmail.com
                <img className="SubMenu" src={SubFlecha} alt="Flechita"/>
            </li>
            <li className="Shopping" onClick={() => setToogleCart(!toggleCart)} >
              <img className="Carrito" src={Carrito} alt="Carrito" />
              {cart.length > 0 && <div>{cart.length}</div>}
            </li>
          </ul>
        </div>
        {toggle && <Menu/>}
        {toggleCart && <MyOrder/>}
      </nav>
    </header>
  );
}
export default Header;