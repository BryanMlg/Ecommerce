import Style from '@style/Menu.module.scss';
import Link from 'next/link';
import { ContextApp } from '@context/ContextApp';
import { useContext } from 'react';

export default function Menu({ auth }) {
  const { toggleMenu } = useContext(ContextApp);
  function handleLogout() {
    auth.signOut();
    toggleMenu();
  }
  if (auth?.user?.role === 'admin') {
    return (
      <div className={Style['desktop-menu']}>
        <ul>
          <li>
            <Link href="/myaccount">My account</Link>
          </li>
          <li>
            <Link onClick={handleLogout} href="/login">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  if (auth?.user) {
    return (
      <div className={Style['desktop-menu']}>
        <ul>
          <li>
            <Link href="/">My Orders</Link>
          </li>
          <li>
            <Link href="/myaccount">My account</Link>
          </li>
          <li>
            <Link onClick={handleLogout} href="/login">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
