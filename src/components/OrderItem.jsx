import React, { useContext } from 'react';
import '@style/OrderItem.scss';
import CloseIcon from "@assets/icon_close.png"
import ContextApp from "@context/ContextApp.js"
export default function OrderItem ({product})  {
  const {RemoveFromCart} = useContext(ContextApp);
	return (
		<div className="MyOrderContent">
          <div className="Shopping">
            <figure>
              <img
                src={product.images[0]}
                alt={product.title}
              />
            </figure>
            <p>{product.title}</p>
            <p>{product.price +"$"}</p>
            <img src={CloseIcon} alt="Close" className="Close-Img" onClick={() => RemoveFromCart(product)}/>
          </div>
        </div>
      
	);
}