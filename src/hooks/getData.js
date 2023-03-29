const API = process.env.URL_API;
import { useEffect, useState } from 'react';

const Data = async (id) => {
  const apiURl = id ? `${API}products/${id}` : `${API}products`;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

const getData = () => {
  const [products, SetProducts] = useState([]);
  useEffect(async () => {
    SetProducts(await Data());
  }, []);
  return products;
};

export default getData;
