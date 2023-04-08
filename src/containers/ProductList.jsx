import ProductItem from '@components/ProductItem.jsx';
import Style from'@style/ProductList.module.scss';
import getData from '@hooks/getData.js';
export default function ProductList  () {
	const products = getData();
	return (
		<section className={Style["main-container"]}>
			<div className={Style.ProductList}>
				{products.map((product) => {
						if (product.images.length > 0 && product.images[0] !== null) {
								return <ProductItem product = {product} key={product.id} />;
						}
				})}
		</div>
		</section>
	);
}