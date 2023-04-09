import { useEffect, useState } from 'react';
const API = process.env.API_URL;

const useGetProducts = (id) => {
  const apiURl = id ? `${API}products/${id}` : `${API}products`;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiURl);
        const data = await response.json();
        setProducts(
          data.filter((item) => {
            return item;
          })
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, [apiURl]);

  return products;
};

export default useGetProducts;
