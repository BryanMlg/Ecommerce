import { authContext } from '@context/ContextApp';
import { useContext } from 'react';
import Router from "next/router";
export default function Dashboard() {
  const auth = useContext(authContext);
  function VerifyRole(){
    if(auth?.user?.role !== 'admin'){
      if(auth?.user?.role === 'customer'){
        Router.push('/login');
      }
    }else{
      return <div>Dashboard</div>;
    }
  }
  return VerifyRole();
}