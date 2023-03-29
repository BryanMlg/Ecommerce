import React from "react";
import "@style/ProductItem.scss";
import SvgCarrito from "@assets/bt_add_to_cart.svg";

export default function ProductItem ({product})  {

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>{product.price}$</p>
					<p>{product.title}</p>
				</div>
				<figure>
					<img src={SvgCarrito} alt="AddCart" />
				</figure>
			</div>
		</div>
	);
}