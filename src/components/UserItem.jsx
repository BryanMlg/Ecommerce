import Style from '@style/AdminItem.module.scss';
import Image from 'next/image';
import DeleteIcon from '@assets/DeleteIcon.svg';
import { useContext } from 'react';
import { ContextApp } from '@context/ContextApp';
import { deleteUser } from '@services/api/users.services';
export default function UserItem({ user }) {
  const { toggleAlertNotification } = useContext(ContextApp);
  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => {
        toggleAlertNotification('User Deleted');
      })
      .catch((error) => {
        toggleAlertNotification(error.message, true);
      });
  };
  return (
    <div className={Style.MyOrderContent}>
      <div className={Style.Shopping}>
        <p>{`ID:${user.id}`}</p>
        <figure>
          <Image priority={true} unoptimized={() => user.avatar} src={user.avatar} alt={user.name} width="240" height="240" />
        </figure>
        <p>{user.name}</p>
        <p>{user.role}</p>
        <figure>
          <Image src={DeleteIcon} alt="Close" className={Style['Delete-Img']} width="0" height="0" onClick={() => handleDelete(user?.id)} />
        </figure>
      </div>
    </div>
  );
}
