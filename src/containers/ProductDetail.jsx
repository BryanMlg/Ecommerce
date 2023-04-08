import React from 'react';
import ProductInfo from '@components/ProductInfo.jsx';
import '@style/ProductDetail.scss';
import Image from 'next/image';
export default function ProductDetail() {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <Image src="@assets/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
}
