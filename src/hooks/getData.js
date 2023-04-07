import { useEffect, useState } from "react";
const API = "https://api.escuelajs.co/api/v1/";

const useGetProducts = (id) => {
  const apiURl = id ? `${API}products/${id}` : `${API}products`;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiURl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return products;
};

export default useGetProducts;
