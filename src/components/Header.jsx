import React from "react";
import "../style/Header.scss";
export default function Header() {
  return (
    <header>
      <nav>
        <img className="Menu" src="/Assets/icon_menu.svg" alt="Menu" />
        <div className="Left">
          <img className="Logo" src="/Assets/logo_yard_sale.svg" alt="Logo" />
          <ul className="ListaLeft">
            <li>
              <a href="">Todo</a>
            </li>
            <li>
              <a href="">Ropa</a>
            </li>
            <li>
              <a href="">Electronicos</a>
            </li>
            <li>
              <a href="">Muebles</a>
            </li>
            <li>
              <a href="">Juguetes</a>
            </li>
            <li>
              <a href="">Otros</a>
            </li>
          </ul>
        </div>
        <div className="Right">
          <ul>
            <li className="Email">
              bryanmlg2018@gmail.com
              <img className="SubMenu" src="/Assets/flechita.svg" alt="Flecha" />
            </li>

            <li className="Shopping">
              <img
                className="Carrito"
                src="/Assets/icon_shopping_cart.svg"
                alt="Carrito"
              />
              <div></div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
