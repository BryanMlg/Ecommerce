import { authContext } from '@context/ContextApp';
import { useContext } from 'react';
import Router from 'next/router';
import { Chart } from '@components/Chart';
import { GetProducts } from '@services/api/products.services.api';
import { GetUsers } from '@services/api/users.services';
export default function Dashboard() {
  const auth = useContext(authContext);

  const products = GetProducts();
  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  const users = GetUsers();
  const usersRole = users?.map((user) => user.role);
  const userRoleCount = usersRole?.map((role) => role);

  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const dataProducts = {
    datasets: [
      {
        label: 'Products',
        data: countOccurrences(categoryCount),
        borderWidth: 5,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0'],
      },
    ],
  };

  const dataUsers = {
    datasets: [
      {
        label: 'Users',
        data: countOccurrences(userRoleCount),
        borderWidth: 5,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0'],
      },
    ],
  };

  function VerifyRole() {
    if (auth?.user?.role !== 'admin') {
      if (auth?.user?.role === 'customer') {
        Router.push('/login');
      }
    }
  }
  return (
    <>
      {VerifyRole()}
      <Chart chartData={dataProducts} />;
      <Chart chartData={dataUsers} />;
    </>
  );
}
