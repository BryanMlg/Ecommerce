import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem.jsx';
import '@style/ProductList.scss';
import getData from '../hooks/getData.js';
export default function ProductList  () {
	const products = getData()
	return (
		<section className="main-container">
			<div className="ProductList">

						{products.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
				
			</div>
		</section>
	);
}