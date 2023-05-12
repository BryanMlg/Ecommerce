import React from 'react';
import Style from '@style/NotFound.module.scss';
import Link from 'next/link';
export default function NotFound() {
  return (
    <div className={Style.container}>
      <h1>Oops!!</h1>
      <h2>404 - Page not found</h2>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <Link href="/">Go To Homepage</Link>
    </div>
  );
}
