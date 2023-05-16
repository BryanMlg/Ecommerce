/* eslint-disable react-hooks/rules-of-hooks */
import CategoryItem from '@components/CategoryItem';
import GetCategories from '@services/api/categorys.services';
import Style from '@style/AdminLists.module.scss';
import useScroll from '@hooks/useScroll';
export default function AdminItemsList() {
  function getCategoriesToShow() {
    const users = GetCategories();
    return users.slice(0, useScroll());
  }
  return (
    <section className={Style['main-container']}>
      <div className={Style.ProductList}>
        {getCategoriesToShow().map((category) => {
          if (category.avatar !== null) {
            return <CategoryItem  category={category} key={category.id} />;
          }
          return null;
        })}
      </div>
    </section>
  );
}