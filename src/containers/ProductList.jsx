import ProductItem from '@components/ProductItem.jsx';
import Style from'@style/ProductList.module.scss';
import {GetProducts, GetProductsCategory} from '@services/api/products.services.api';
export default function ProductList  ({ categoryId }) {
	function VerificarCategoria(){
		let products = null;
		if(categoryId == 1){
			products = GetProductsCategory(categoryId);
			return products;
		}
		if(categoryId == 2){
			products = GetProductsCategory(categoryId);
			return products;
		}
		if(categoryId == 4){
			products = GetProductsCategory(categoryId);
			return products;
		}
		if(categoryId == 5){
			products = GetProductsCategory(categoryId);
			return products;
		}else{
			products = GetProducts();
			return products;
		}
		
	}
	return (
		<section className={Style["main-container"]}>
			<div className={Style.ProductList}>
				{VerificarCategoria().map((product) => {
						if (product.images.length > 0 && product.images[0] !== null) {
								return <ProductItem product = {product} key={product.id} />;
						}
				})}
		</div>
		</section>
	);
}