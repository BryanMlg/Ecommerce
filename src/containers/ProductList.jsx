import ProductItem from '@components/ProductItem.jsx';
import Style from '@style/ProductList.module.scss';
import { GetProducts, GetProductsCategory } from '@services/api/products.services.api';
import { useContext } from 'react';
import UseScroll from '@hooks/useScroll';
import { ContextApp } from '@context/ContextApp';
import ProductInfo from '@components/ProductInfo';
export default function ProductList({ categoryId }) {
  const { state } = useContext(ContextApp);

  function getProductsToShow() {
    let products;
    if (categoryId === 1) {
      products = GetProductsCategory(categoryId);
    } else if (categoryId === 2) {
      products = GetProductsCategory(categoryId);
    } else if (categoryId === 4) {
      products = GetProductsCategory(categoryId);
    } else if (categoryId === 5) {
      products = GetProductsCategory(categoryId);
    } else {
      products = GetProducts();
    }
    return products.slice(0, UseScroll());
  }

  return (
    <section className={Style['main-container']}>
      {state.menuProductInfoIsOpen && <ProductInfo />}
      <div className={Style.ProductList}>
        {getProductsToShow().map((product) => {
          if (product.images.length > 0 && product.images[0] !== null) {
            return <ProductItem product={product} key={product.id} />;
          }
          return null;
        })}
      </div>
    </section>
  );
}
