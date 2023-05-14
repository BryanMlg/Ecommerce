import Style from '@style/Menu.module.scss';
import Link from 'next/link';
export default function Menu({ auth }) {
  function handleLogout (){
    auth.signOut();
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
  } else {
    return (
      <div className={Style['desktop-menu']}>
        <ul>
          <li>
            <Link href="*" className={Style.title}>
              My orders
            </Link>
          </li>
          <li>
            <Link href="/myaccount">My account</Link>
          </li>
          <li>
            <Link href="/login">Signin</Link>
          </li>
        </ul>
      </div>
    );
  }
}
