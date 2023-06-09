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
    const categories = GetCategories(toggleAlertNotification);
    return categories.slice(0, useScroll(12));
  }
  return (
    <section className={Style['main-container']}>
      <div className={Style.Alert}>{state.alertNotification && <Alert />}</div>
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