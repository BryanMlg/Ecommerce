import Style from '@style/MyAccount.module.scss';
import { useContext } from 'react';
import { authContext } from '@context/ContextApp';
import Image from 'next/image';
import NoUser from '@assets/NoUser.svg';
import Router from 'next/router';
export default function MyAccount() {
  const auth = useContext(authContext);
  const HandleLogin = () => {
    Router.push('/login');
  };
  return (
    <div className={Style.MyAccount}>
      <div className={Style['MyAccount-container']}>
        <h1 className={Style.title}>My account</h1>
        <Image className={Style.UserImage} src={auth?.user?.avatar || NoUser} width={50} height={50} alt="Avatar" />
          <p className={Style.value}>{auth?.user?.name}</p>
		  <p className={Style.value}>{auth?.user?.email}</p>
        {auth?.user && <input type="submit" value="Edit" className={Style['secondary-button']} />}
        {!auth?.user && <input onClick={HandleLogin} type="button" value="Login" className={Style['secondary-button']} />}
      </div>
    </div>
  );
}
