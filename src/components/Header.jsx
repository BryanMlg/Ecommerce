/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import Image from 'next/image';
import MenuLogo from '@assets/icon_menu.svg';
import Logo from '@assets/logo_yard_sale.svg';
import SubFlecha from '@assets/flechita.svg';
import Carrito from '@assets/icon_shopping_cart.svg';
import Menu from '@components/Menu.jsx';
import ContextApp from '@context/ContextApp.js';
import MyOrder from '@containers/MyOrder.jsx';
import Style from '@style/Header.module.scss';
import MenuMobile from '@components/MenuMobile.jsx';
import Link from 'next/link';
const Header = () => {
  const {
    state: { cart },
    state,
    toggleMenu,
    toggleOrder,
    toggleMenuMobile,
  } = useContext(ContextApp);
  return (
    <>
    <header className={Style.Navigation}>
      <nav>
        <Image className={Style.Menu} src={MenuLogo} alt="Menu" onClick={() => toggleMenuMobile()} />
        <div className={Style.Left}>
          <Link href="/">
            <Image className={Style.Logo} src={Logo} alt="Logo" />
          </Link>
          <ul className={Style.ListaLeft}>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
            <Link href="/clothes">Clothes</Link>
            </li>
            <li>
              <Link href="/electronics">Electronics</Link>
            </li>
            <li>
              <Link href="/shoes">Shoes</Link>
            </li>
            <li>
              <Link href="/others">Others</Link>
            </li>
          </ul>
        </div>
        <div className={Style.Right}>
          <ul>
            <li className={Style.Email} onClick={() => toggleMenu()}>
              Bryan Guerra
              <Image className={Style.SubMenu} src={SubFlecha} alt="Flechita" />
            </li>
            <li className={Style.Shopping} onClick={() => toggleOrder()}>
              <Image className={Style.Carrito} src={Carrito} alt="Carrito" width={100} />
              {cart.length > 0 && <div>{cart.length}</div>}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
        {state.menuMobileIsOpen && <MenuMobile />}
      </nav>
    </header>
    {state.orderIsOpen && <MyOrder />}
    </>
  );
};
export default Header;
