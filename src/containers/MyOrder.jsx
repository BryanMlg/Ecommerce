import React, { useContext } from "react";
import OrderItem from "@components/OrderItem.jsx";
import "@style/MyOrder.scss";
import Flechita from "@assets/flechita.svg";
import ContextApp from "@context/ContextApp.js";
export default function MyOrder () {
  const {state:{cart}} = useContext(ContextApp);
  const Total = () =>{
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const Pago = cart.reduce(reducer, 0);
    return Pago;
  }
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={Flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map(product=>
            <OrderItem product={product} key={`orderitem-${product.id}`} />
          )}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${Total()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
