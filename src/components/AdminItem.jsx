import Style from '@style/AdminItem.module.scss';
import Image from 'next/image';
import DeleteIcon from '@assets/DeleteIcon.svg';
import EditIcon from '@assets/EditIcon.svg';
import { deleteProduct } from '@services/api/products.services.api';
import { useContext } from 'react';
import { ContextApp } from '@context/ContextApp';
import Link from 'next/link';
export default function AdminItem({ product }) {
  const {toggleAlertNotification} = useContext(ContextApp);
  const handleDelete = (id) => {
    deleteProduct(id);
    toggleAlertNotification();
  };
  return (
    <>
      <div className={Style.MyOrderContent}>
        <div className={Style.Shopping}>
          <p>{`ID ${product.id}`}</p>
          <figure>
            <Image priority={true} unoptimized={() => product.images[0]} src={product.images[0]} alt={product.title} width="240" height="240" />
          </figure>
          <p>{product.title}</p>
          <p>{`$${product.price}`}</p>
          <figure>
            <Image src={DeleteIcon} alt="Close" className={Style['Delete-Img']} width="0" height="0" onClick={() => handleDelete(product?.id)} />
            <Link href={`/dashboard/edit/${product.id}`}>
            <Image src={EditIcon} alt="Close" className={Style['Edit-Img']} width="0" height="0" />
            </Link>
          </figure>
        </div>
      </div>
    </>
  );
}
