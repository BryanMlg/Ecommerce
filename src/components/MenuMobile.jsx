import Link from 'next/link';
import Style from '@style/MenuMobile.module.scss';
export default function MenuMobile() {
  return (
    <div className={Style['Mobile-Menu']}>
      <ul className={Style.Categorias}>
        <li>
          <Link href="/">Todo</Link>
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
    </div>
  );
}
