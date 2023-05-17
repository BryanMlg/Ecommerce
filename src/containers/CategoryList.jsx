/* eslint-disable react-hooks/rules-of-hooks */
import CategoryItem from '@components/CategoryItem';
import {GetCategories} from '@services/api/categorys.services';
import Style from '@style/AdminLists.module.scss';
import useScroll from '@hooks/useScroll';
import { useContext } from 'react';
import { ContextApp } from '@context/ContextApp';
import Alert from '@components/Alert';
export default function AdminItemsList() {
  const {state, toggleAlertNotification} = useContext(ContextApp);
  function getCategoriesToShow() {
    const users = GetCategories(toggleAlertNotification);
    return users.slice(0, useScroll());
  }
  return (
    <section className={Style['main-container']}>
      {state.alertNotification && <Alert Message={"Se elimino el producto"} isErrorLogin={false} />}
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