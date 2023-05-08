/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Style from '@style/ProductInfo.module.scss';
import Image from 'next/image';
import Close from "@assets/icon_close.png";
import AddToCart from "@assets/bt_add_to_cart.svg";
import { useContext } from 'react';
import ContextApp from '@context/ContextApp';
import AgregadoCarrito from '@assets/bt_added_to_cart.svg';
export default function ProductInfo() {
  const {ProductDescription, state, addToCart, toggleMenuProductInfo} = useContext(ContextApp);
  const HandleClick = (product) => {
    addToCart(product);
  };
  return (
    <aside className={Style["Product-Detail"]}>
      <div className={Style["Product-Detail-Close"]} onClick={()=>toggleMenuProductInfo(null)} role='figure' >
        <Image src={Close} alt="close" width={50} height={50}/>
      </div>
      <Image className={Style.ProductImg} priority={true} unoptimized={() => ProductDescription.images[0]} src={ProductDescription.images[0]} alt={ProductDescription.title} width="240" height="240" />
      <div className={Style.Dots}>
        <span className={Style.dot}></span>
        <span className={Style.dot}></span>
        <span className={Style.dot}></span>
      </div>
      <div className={Style["Product-Info"]}>
        <p>{ProductDescription.price + "$"}</p>
        <p>{ProductDescription.title}</p>
        <p>
          {ProductDescription.description}
        </p>
        <button className={Style.AddCart} onClick={() => HandleClick(ProductDescription)}>
        <figure>
          {state.cart.includes(ProductDescription) ? <Image className={Style.IconAdd} src={AgregadoCarrito} alt="added to cart" /> 
          : <Image className={Style.IconAdd} src={AddToCart} alt="AddCart" />}
        </figure>
       
        </button>
      </div>
      { state.menuProductInfoIsOpen ?? <ProductInfo/>}
    </aside>
  );
}
