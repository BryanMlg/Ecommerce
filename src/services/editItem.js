/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import endPoints from '@services/api';
import useMakeFetch from '@hooks/useMakeFetch';

export default function EditItem() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    (async () => {
      try {
        const response = await useMakeFetch(endPoints.products.getProduct(id), 'GET');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        alert(error);
      }
    })();
  }, [router?.isReady]);

  return product;
}
