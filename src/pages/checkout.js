import React from 'react';
import OrderItem from '@components/OrderItem.jsx';
import Style from '@style/CheckOut.module.scss';
import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import ContextApp from '@context/ContextApp';
export default function Checkout() {
  const {
    state: { cart },
  } = useContext(ContextApp);
  const Total = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const Pago = cart.reduce(reducer, 0);
    return Pago;
  };
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Head>
        <title>CheckOut</title>
      </Head>
      <div className={Style.Checkout}>
        <div className={Style['Checkout-container']}>
          <h1 className={Style.title}>My order</h1>
          <div className={Style['Checkout-content']}>
            <div className={Style.order}>
              <p>
                <span>{currentDate.toLocaleDateString()}</span>
                <span>article {cart.length > 0 && cart.length}</span>
              </p>
              <p>${Total()}</p>
            </div>
            {cart.map((product) => (
              <OrderItem product={product} key={`orderitem-${product.id}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
