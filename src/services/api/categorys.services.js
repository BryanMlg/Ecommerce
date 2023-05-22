/* eslint-disable react-hooks/rules-of-hooks */
import useMakeFetch from '@hooks/useMakeFetch';
import endPoints from '@services/api';
import { useState, useEffect } from 'react';
const GetCategories = (Alert) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await useMakeFetch(endPoints.categories.getCategoriesList, 'GET');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        throw new Error('Error' + error);
      }
    })();
  }, [Alert]);
  return users;
};

const deleteCategory = async (id) => {
  try {
    const response = await useMakeFetch(endPoints.categories.deleteCategory(id), 'DELETE');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error deleting product' + error);
  }
};

export { GetCategories, deleteCategory };
