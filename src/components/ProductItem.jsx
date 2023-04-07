import React, { useContext } from "react";
import SvgCarrito from "@assets/bt_add_to_cart.svg";
import ContextApp from "@context/ContextApp";
import Style from "@style/ProductItem.module.scss";
import Image from "next/image";
export default function ProductItem ({product})  {
	const { addToCart } = useContext(ContextApp);

	const HandleClick = item => {
		addToCart(item);
	}

	return (
		<div className={Style.ProductItem}>
			<Image 
			loader={() => product.images[0]}
			src={product.images[0]}
			alt={product.title}
			width='0' 
			height='0'
			/>
			<div className={Style["product-info"]}>
				<div>
					<p>{product.price}$</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => HandleClick(product)}>
					<Image src={SvgCarrito} alt="AddCart" />
				</figure>
			</div>
		</div>
	);
}