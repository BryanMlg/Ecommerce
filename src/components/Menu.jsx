import React from 'react';
import Style from '@style/Menu.module.scss';
import Link from 'next/link';
export default function Menu() {
  return (
    <div className={Style['desktop-menu']}>
      <ul>
        <li>
          <a href="*" className={Style.title}>
            My orders
          </a>
        </li>

        <li>
          <a href="*">My account</a>
        </li>

        <li>
          <Link href="/login">Signin</Link>
        </li>
      </ul>
    </div>
  );
}
