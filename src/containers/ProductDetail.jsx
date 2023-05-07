import React from 'react';
import ProductInfo from '@components/ProductInfo.jsx';
import Style from "@style/ProductDetail.module.scss";
import Image from 'next/image';
export default function ProductDetail() {
  return (
    <aside className={Style.ProductDetail}>
      <div className={Style["ProductDetail-close"]}>
        <Image src="@assets/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
}
