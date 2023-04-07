import React, { useContext, useState } from "react";
import Image from "next/image";
import MenuLogo from "@assets/icon_menu.svg";
import Logo from "@assets/logo_yard_sale.svg";
import SubFlecha from "@assets/flechita.svg";
import Carrito from "@assets/icon_shopping_cart.svg";
import Menu from "@components/Menu.jsx";
import ContextApp from "@context/ContextApp.js";
import MyOrder from "@containers/MyOrder.jsx";
import Style from "@style/Header.module.scss";
import Link from "next/link";
const Header = () => {
  const {state: { cart }, state, toggleMenu, toggleOrder} = useContext(ContextApp);
  return (
    <header className={Style.Navigation}>
      <nav>
        <Image className={Style.Menu} src={MenuLogo} alt="Menu" />
        <div className={Style.Left}>
            <Link href="/">
            <Image className={Style.Logo} src={Logo} alt="Logo"/>
            </Link>
          <ul className={Style.ListaLeft}>
            <li><a href="">Todo</a></li>
            <li><a href="">Ropa</a></li>
            <li><a href="">Electronicos</a></li>
            <li><a href="">Muebles</a></li>
            <li><a href="">Juguetes</a></li>
            <li><a href="">Otros</a></li>
          </ul>
        </div>
        <div className={Style.Right}>
          <ul>
            <li className={Style.Email}onClick={() => toggleMenu()}>
                bryanmlg2018@gmail.com
                <Image className={Style.SubMenu} src={SubFlecha} alt="Flechita"/>
            </li>
            <li className={Style.Shopping}onClick={() => toggleOrder()} >
              <Image className={Style.Carrito} src={Carrito} alt="Carrito" />
              {cart.length > 0 && <div>{cart.length}</div>}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
        {state.orderIsOpen && <MyOrder />}
      </nav>
    </header>
  );
};
export default Header;
