import useMakeFetch from '@hooks/useMakeFetch';
import endPoints from '@services/api';
import { useState, useEffect } from 'react';


const GetProducts = (PRODUCT_LIMIT, PRODUCT_OFFSET) => {
  const request = (PRODUCT_LIMIT, PRODUCT_OFFSET) ? `${endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)}` : `${endPoints.products.getAllProducts}`;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = await useMakeFetch(request, 'GET');
        const data = await response.json();
        setProducts(
          data.filter(item => {
            return item;
          })
        );
      } catch (error) {
        alert(error);
      }
    })();
  },[]);

  return products;
};

const GetProductsCategory = (id) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = await useMakeFetch(endPoints.categories.getCategoryProducts(id), 'GET');
        const data = await response.json();
        setProducts(
          data.filter(item => {
            return item;
          })
        );
      } catch (error) {
        alert(error);
      }
    })();
  },[]);

  return products;
};

export {GetProducts, GetProductsCategory};