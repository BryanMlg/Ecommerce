import React from 'react';
import Style from '@style/ProductInfo.module.scss';
import Image from 'next/image';
export default function ProductInfo() {
  return (
    <aside className={Style["Product-Detail"]}>
      <div className={Style["Product-Detail-Close"]}>
        <Image src="@assets/icon_close.png" alt="close" />
      </div>
      <Image className={Style.ProductImg} src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="PC" />
      <div className={Style.Dots}>
        <span className={Style.dot}></span>
        <span className={Style.dot}></span>
        <span className={Style.dot}></span>
      </div>
      <div className={Style["Product-Info"]}>
        <p>$35,00</p>
        <p>Computadora Master-Race 2023</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex expedita atque fugiat quidem explicabo blanditiis ullam, natus a quae aliquid accusantium optio eaque nihil rem molestias alias
          eos doloremque?
        </p>
        <button className={Style.AddCart}>
          <Image src="@assets/bt_add_to_cart.svg" alt="add to cart" />
          Agregar a carrito
        </button>
      </div>
    </aside>
  );
}
