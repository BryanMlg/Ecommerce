/* eslint-disable react-hooks/rules-of-hooks */
import UserItem from '@components/UserItem';
import { GetUsers } from '@services/api/users.services';
import Style from '@style/AdminLists.module.scss';
import useScroll from '@hooks/useScroll';
import { useContext } from 'react';
import { ContextApp } from '@context/ContextApp';
import Alert from '@components/Alert';
export default function AdminItemsList() {
  const { state, toggleAlertNotification } = useContext(ContextApp);
  function getUsersToShow() {
    const users = GetUsers(toggleAlertNotification);
    return users.slice(0, useScroll());
  }
  return (
    <section className={Style['main-container']}>
       <div className={Style.Alert}>{state.alertNotification && <Alert Message={"User Deleted"} isErrorLogin={false} />}</div>
      <div className={Style.ProductList}>
        {getUsersToShow().map((user) => {
          if (user.avatar !== null) {
            return <UserItem user={user} key={user.id} />;
          }
          return null;
        })}
      </div>
    </section>
  );
}
