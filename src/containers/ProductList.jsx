import React from 'react';
import ProductItem from '../components/ProductItem.jsx';
import '../style/ProductList.scss';

export default function ProductList  () {
	return (
		<section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
	);
}