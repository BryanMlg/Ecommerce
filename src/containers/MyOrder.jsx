import React from "react";
import OrderItem from "@components/OrderItem.jsx";
import "@style/MyOrder.scss";

export default function MyOrder () {
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src="@assets/flechita.svg" alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <OrderItem />
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
