import React, { useContext } from "react";
import "@style/ProductItem.scss";
import SvgCarrito from "@assets/bt_add_to_cart.svg";
import ContextApp from "@context/ContextApp";
export default function ProductItem ({product})  {
	const { addToCart } = useContext(ContextApp);

	const HandleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>{product.price}$</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => HandleClick(product)}>
					<img src={SvgCarrito} alt="AddCart" />
				</figure>
			</div>
		</div>
	);
}