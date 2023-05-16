/* eslint-disable react-hooks/rules-of-hooks */
import AdminItem from '@components/AdminItem';
import { GetProducts} from '@services/api/products.services.api';
import Style from '@style/AdminLists.module.scss';
import useScroll from '@hooks/useScroll';
export default function AdminItemsList() {
  function getProductsToShow() {
    const products = GetProducts();
    return products.slice(0, useScroll());
  }
  return (
    <section className={Style['main-container']}>
      <div className={Style.ProductList}>
        {getProductsToShow().map((product) => {
          if (product.images[0] !== null) {
            return <AdminItem product={product} key={product.id} />;
          }
          return null;
        })}
      </div>
    </section>
  );
}
