import React from 'react';
import '@style/Order.scss';
import Flechita from '@assets/flechita.svg';
import Image from 'next/image';
export default function Order() {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={Flechita} alt="arrow" />
    </div>
  );
}
