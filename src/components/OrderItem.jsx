import React, { useContext } from "react";
import CloseIcon from "@assets/icon_close.png";
import ContextApp from "@context/ContextApp.js";
import Style from "@style/OrderItem.module.scss";
import Image from "next/image";
export default function OrderItem({ product }) {
  const { RemoveFromCart } = useContext(ContextApp);
  return (
    <div className={Style.MyOrderContent}>
      <div className={Style.Shopping}>
        <figure>
          <Image
            src={product?.images[0]}
            alt={product?.title}
            loader={() => product.images[0]}
            width="100"
            height="100"
          />
        </figure>
        <p>{product?.title}</p>
        <p>{product?.price + "$"}</p>
        <Image
          src={CloseIcon}
          alt="Close"
          className={Style["Close-Img"]}
          onClick={() => RemoveFromCart(product)}
          width="0"
          height="0"
        />
      </div>
    </div>
  );
}
