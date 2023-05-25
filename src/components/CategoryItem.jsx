import Style from '@style/AdminItem.module.scss';
import Image from 'next/image';
import DeleteIcon from '@assets/DeleteIcon.svg';
import EditIcon from '@assets/EditIcon.svg';
import { useContext } from 'react';
import { ContextApp } from '@context/ContextApp';
import { deleteCategory } from '@services/api/categorys.services';
export default function UserItem({ category }) {
  const {toggleAlertNotification} = useContext(ContextApp);
  const handleDelete = (id) => {
    deleteCategory(id).then(() =>{
      toggleAlertNotification("Category Deleted");
    }).catch(() =>{
      toggleAlertNotification("DELETE ERROR", true);
    });
  };
  return (
    <div className={Style.MyOrderContent}>
      <div className={Style.Shopping}>
        <p>{`ID:${category.id}`}</p>
        <figure>
          <Image priority={true} unoptimized={() => category.image} src={category.image} alt={category.name} width="240" height="240" />
        </figure>
        <p>{category.name}</p>
        <p>{category.role}</p>
        <figure>
          <Image src={DeleteIcon} alt="Close" className={Style['Delete-Img']} width="0" height="0" onClick={()=> handleDelete(category.id)} />
          <Image src={EditIcon} alt="Edit" className={Style['Edit-Img']} width="0" height="0" />
        </figure>
      </div>
    </div>
  );
}