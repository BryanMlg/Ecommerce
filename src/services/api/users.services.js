/* eslint-disable react-hooks/rules-of-hooks */
import useMakeFetch from '@hooks/useMakeFetch';
import endPoints from '@services/api';
import { useState, useEffect } from 'react';

const GetUsers = (ALERT) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await useMakeFetch(endPoints.users.getUsers, 'GET');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        alert(error);
      }
    })();
  }, [ALERT]);
  return users;
};

const deleteUser = async (id) => {
  try {
    const response = await useMakeFetch(endPoints.users.deleteUser(id), 'DELETE');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error deleting product' + error);
  }
};

const userIsAvailable = async (email) => {
  try {
    const response = await useMakeFetch(endPoints.users.userIsAvailable(), 'POST', {email});
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error deleting product' + error);
  }
};

export { GetUsers, deleteUser, userIsAvailable };
