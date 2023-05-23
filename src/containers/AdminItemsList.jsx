/* eslint-disable react-hooks/rules-of-hooks */
import AdminItem from '@components/AdminItem';
import { GetProducts} from '@services/api/products.services.api';
import Style from '@style/AdminLists.module.scss';
import useScroll from '@hooks/useScroll';
import { useContext, useState } from 'react';
import { ContextApp } from '@context/ContextApp';
import EditForm from '@components/EditForm';
import Alert from '@components/Alert';
export default function AdminItemsList() {
  const {state, toggleAlertNotification} = useContext(ContextApp);
  const [openEdit, setOpenEdit] = useState(false);
  function getProductsToShow() {
    const products = GetProducts(undefined, undefined, () => toggleAlertNotification());
    return products.slice(0, useScroll());
  }
  function OpenEditToggle(){
    setOpenEdit(!openEdit);
  }
  return (
    <section className={Style['main-container']}>
      <button onClick={()=>OpenEditToggle()}>{openEdit ? 'Close' : 'Add Product'}</button>
       {state.alertNotification && <Alert Message={"Se elimino el producto"} isErrorLogin={false} />}
       <div className={Style.EditForm}>{openEdit && <EditForm/>}</div>
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
