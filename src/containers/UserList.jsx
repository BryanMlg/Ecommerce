/* eslint-disable react-hooks/rules-of-hooks */
import UserItem from '@components/UserItem';
import GetUsers from '@services/api/users.services';
import Style from '@style/AdminLists.module.scss';
import useScroll from '@hooks/useScroll';
export default function AdminItemsList() {
  function getUsersToShow() {
    const users = GetUsers();
    return users.slice(0, useScroll());
  }
  return (
    <section className={Style['main-container']}>
      <div className={Style.ProductList}>
        {getUsersToShow().map((user) => {
          if (user.avatar !== null) {
            return <UserItem  user={user} key={user.id} />;
          }
          return null;
        })}
      </div>
    </section>
  );
}
