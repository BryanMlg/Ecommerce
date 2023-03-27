import React from "react";
import "@style/ShoppingItem.scss";

export default function ShoppingItem() {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="bike"
        />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
}
