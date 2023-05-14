import AdminItemsList from '@containers/AdminItemsList';
import { authContext } from '@context/ContextApp';
import { useContext } from 'react';
import Router from "next/router";
export default function Products() {
  const auth = useContext(authContext);
  function VerifyRole(){
    if(auth?.user?.role !== 'admin'){
      if(auth?.user?.role === 'customer'){
        Router.push('/login');
      }
    }else{
      return <AdminItemsList />;
    }
  }
  return VerifyRole();
}
