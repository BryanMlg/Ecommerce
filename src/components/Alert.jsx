import React from 'react';
import Style from "@style/Alert.module.scss";
import Image from 'next/image';
import Close from '@assets/icon_close.png';
export default function ProductDetail() {
  return (
    <aside className={Style.ProductDetail}>
      <div className={Style["ProductDetail-close"]}>
        <Image src={Close}alt="close" width={50} height={50}/>
      </div>
      <div className={Style.Alert}>
        <p>No more products to show</p>
      </div>
    </aside>
  );
}
