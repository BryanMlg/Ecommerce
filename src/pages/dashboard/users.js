import UserList from '@containers/UserList';
import { authContext } from '@context/ContextApp';
import { useContext } from 'react';
import Router from "next/router";
export default function Users() {
  const auth = useContext(authContext);
  function VerifyRole(){
    if(auth?.user?.role !== 'admin'){
      if(auth?.user?.role === 'customer'){
        Router.push('/login');
      }
    }else{
      return <UserList/>;
    }
  }
  return VerifyRole();
}