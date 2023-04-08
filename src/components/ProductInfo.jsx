import React from 'react';
import '@style/ProductInfo.scss';
import Image from 'next/image';
export default function ProductInfo() {
  return (
    <aside class="Product-Detail">
      <div class="Product-Detail-Close">
        <Image src="@assets/icon_close.png" alt="close" />
      </div>
      <Image class="ProductImg" src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="PC" />
      <div class="Dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div class="Product-Info">
        <p>$35,00</p>
        <p>Computadora Master-Race 2023</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex expedita atque fugiat quidem explicabo blanditiis ullam, natus a quae aliquid accusantium optio eaque nihil rem molestias alias
          eos doloremque?
        </p>
        <button class="AddCart">
          <Image src="@assets/bt_add_to_cart.svg" alt="add to cart" />
          Agregar a carrito
        </button>
      </div>
    </aside>
  );
}
