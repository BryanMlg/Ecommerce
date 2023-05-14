import Style from '@style/MyAccount.module.scss';
import { useContext } from 'react';
import { authContext } from '@context/ContextApp';
export default function UserInfo() {
  const auth = useContext(authContext);
  if (auth?.user) {
    return (
      <div>
        <h3 className={Style.label}>Name</h3>
        <p className={Style.value}>{auth?.user?.name || 'Guest'}</p>
        <h3 className={Style.label}>Email</h3>
        <p className={Style.value}>{auth?.user?.email || 'Guest'}</p>
        <h3 className={Style.label}>Password</h3>
        <p className={Style.value}>Guest</p>
      </div>
    );
  }
}
