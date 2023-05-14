import Link from 'next/link';
import Style from '@style/MenuMobile.module.scss';
import { useContext } from 'react';
import { ContextApp } from '@context/ContextApp';
export default function MenuMobile({ auth }) {
  function handleLogout() {
    auth.signOut();
    toggleMenuMobile();
  }
  const { state, toggleMenuMobile } = useContext(ContextApp);
  if (auth?.user?.role === 'admin') {
    return (
      <div className={Style['Mobile-Menu']}>
        <ul className={Style.Categorias}>
          <li>
            <Link href="/dashboard/products" onClick={() => toggleMenuMobile()}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/dashboard" onClick={() => toggleMenuMobile()}>
              Dashboard
            </Link>
          </li>
        </ul>
        <ul className={Style['Menu-Cuenta']}>
          <li>
            <Link href="/myaccount" onClick={() => toggleMenuMobile()}>
              Mi cuenta
            </Link>
          </li>
        </ul>
        <ul className={Style['User-Account']}>
          <li>
            <Link href="/myaccount" className={Style.Email} onClick={() => toggleMenuMobile()}>
              {auth?.user?.name}
            </Link>
          </li>
          <li>
            <Link href="/login" className="Sigin" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
        {state.menuMobileIsOpen ?? <MenuMobile />}
      </div>
    );
  }
  if (auth?.user) {
    return (
      <div className={Style['Mobile-Menu']}>
        <ul className={Style.Categorias}>
          <li>
            <Link href="/" onClick={() => toggleMenuMobile()}>
              All
            </Link>
          </li>
          <li>
            <Link href="/clothes" onClick={() => toggleMenuMobile()}>
              Clothes
            </Link>
          </li>
          <li>
            <Link href="/electronics" onClick={() => toggleMenuMobile()}>
              Electronics
            </Link>
          </li>
          <li>
            <Link href="/shoes" onClick={() => toggleMenuMobile()}>
              Shoes
            </Link>
          </li>
          <li>
            <Link href="/others" onClick={() => toggleMenuMobile()}>
              Others
            </Link>
          </li>
        </ul>
        <ul className={Style['Menu-Cuenta']}>
          <li>
            <Link href="*">My Orders</Link>
          </li>
          <li>
            <Link href="/myaccount" onClick={() => toggleMenuMobile()}>
             My Account
            </Link>
          </li>
        </ul>
        <ul className={Style['User-Account']}>
          <li>
            <Link href="/login" className="Sigin" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
        {state.menuMobileIsOpen ?? <MenuMobile />}
      </div>
    );
  } else {
    return (
      <div className={Style['Mobile-Menu']}>
        <ul className={Style.Categorias}>
          <li>
            <Link href="/" onClick={() => toggleMenuMobile()}>
              All
            </Link>
          </li>
          <li>
            <Link href="/clothes" onClick={() => toggleMenuMobile()}>
              Clothes
            </Link>
          </li>
          <li>
            <Link href="/electronics" onClick={() => toggleMenuMobile()}>
              Electronics
            </Link>
          </li>
          <li>
            <Link href="/shoes" onClick={() => toggleMenuMobile()}>
              Shoes
            </Link>
          </li>
          <li>
            <Link href="/others" onClick={() => toggleMenuMobile()}>
              Others
            </Link>
          </li>
        </ul>
        <ul className={Style['User-Account']}>
          <li>
            <Link href="/login" className="Siging" onClick={() => toggleMenuMobile()}>
              Sign in
            </Link>
          </li>
        </ul>
        {state.menuMobileIsOpen ?? <MenuMobile />}
      </div>
    );
  }
}
