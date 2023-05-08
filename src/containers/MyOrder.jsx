import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem.jsx';
import Flechita from '@assets/flechita.svg';
import ContextApp from '@context/ContextApp.js';
import Style from '@style/MyOrder.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export default function MyOrder() {
  const {
    state: { cart },
    toggleOrder,
    state,
  } = useContext(ContextApp);
  const Total = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const Pago = cart.reduce(reducer, 0);
    return Pago;
  };
  return (
    <aside className={Style.MyOrder}>
      <div className={Style['title-container']}>
        <Image src={Flechita} alt="arrow" />
        <p className={Style.title}>My order</p>
      </div>
      <div className={Style['my-order-content']}>
        {cart.map((product) => (
          <OrderItem product={product} key={`orderitem-${product.id}`} />
        ))}
        <div className={Style.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${Total()}</p>
        </div>
        <Link href="/checkout" onClick={() => toggleOrder()}>
          <button className={Style['primary-button']}>Checkout</button>
        </Link>
      </div>
      {state.orderIsOpen ?? <MyOrder />}
    </aside>
  );
}
