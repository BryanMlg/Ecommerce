import React from "react";
import ProductInfo from "@components/ProductInfo.jsx";
import "@style/ProductDetail.scss";

export default function ProductDetail ()  {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src="@assets/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
