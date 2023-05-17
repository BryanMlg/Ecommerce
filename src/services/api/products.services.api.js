/* eslint-disable react-hooks/rules-of-hooks */
import useMakeFetch from '@hooks/useMakeFetch';
import endPoints from '@services/api';
import { useState, useEffect } from 'react';

const GetProducts = (PRODUCT_LIMIT, PRODUCT_OFFSET, ALERT) => {
  const request = (PRODUCT_LIMIT, PRODUCT_OFFSET) ? `${endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)}` : `${endPoints.products.getAllProducts}`;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await useMakeFetch(request, 'GET');
        const data = await response.json();
        setProducts(
          data.filter((item) => {
            return item;
          })
        );
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [ALERT, request]);

  return products;
};

const GetProductsCategory = (id) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await useMakeFetch(endPoints.categories.getCategoryProducts(id), 'GET');
        const data = await response.json();
        setProducts(
          data.filter((item) => {
            return item;
          })
        );
      } catch (error) {
        alert(error);
      }
    })();
  }, [id]);

  return products;
};

const deleteProduct = async (id) => {
  try {
      const response = await useMakeFetch(endPoints.products.deleteProduct(id), 'DELETE');
      const data = await response.json();
      return data;
  } catch (error){
    throw new Error('Error deleting product' + error);
  }
};

export { GetProducts, GetProductsCategory, deleteProduct };
