import Link from 'next/link';
import Style from '@style/MenuMobile.module.scss';
import { useContext } from 'react';
import {ContextApp} from '@context/ContextApp';
export default function MenuMobile() {
  const {
    state,
    toggleMenuMobile,
  } = useContext(ContextApp);
  return (
    <div className={Style['Mobile-Menu']}>
      <ul className={Style.Categorias}>
        <li>
          <Link href="/" onClick={() => toggleMenuMobile()}>Todo</Link>
        </li>
        <li>
          <Link href="/clothes" onClick={() => toggleMenuMobile()}>Clothes</Link>
        </li>
        <li>
          <Link href="/electronics" onClick={() => toggleMenuMobile()}>Electronics</Link>
        </li>
        <li>
          <Link href="/shoes" onClick={() => toggleMenuMobile()}>Shoes</Link>
        </li>
        <li>
          <Link href="/others" onClick={() => toggleMenuMobile()}>Others</Link>
        </li>
      </ul>
      <ul className={Style['Menu-Cuenta']}>
        <li>
          <Link href="*">Mis ordenes</Link>
        </li>
        <li>
          <Link href="*">Mi cuenta</Link>
        </li>
      </ul>
      <ul className={Style['User-Account']}>
        <li>
          <Link href="*" className={Style.Email}>
            undefined
          </Link>
        </li>
        <li>
          <Link href="/login" className="Siging">
            Salir
          </Link>
        </li>
      </ul>
      {state.menuMobileIsOpen ?? <MenuMobile />}
    </div>
  );
}
