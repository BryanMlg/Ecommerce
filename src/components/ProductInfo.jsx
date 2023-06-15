/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Style from '@style/ProductInfo.module.scss';
import Image from 'next/image';
import Close from '@assets/icon_close.png';
import AddToCart from '@assets/bt_add_to_cart.svg';
import { useContext } from 'react';
import { ContextApp } from '@context/ContextApp';
import AgregadoCarrito from '@assets/bt_added_to_cart.svg';
import { useState } from 'react';
import { Loading, Grid } from '@nextui-org/react';
export default function ProductInfo() {
  const { ProductDescription, state, addToCart, toggleMenuProductInfo } = useContext(ContextApp);
  const HandleClick = (product) => {
    addToCart(product);
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <aside className={Style['Product-Detail']}>
      <div className={Style['Product-Detail-Close']} onClick={() => toggleMenuProductInfo(null)} role="figure">
        <Image src={Close} alt="close" width={50} height={50} />
      </div>
      <div className={Style['image-container']}>
        {!imageLoaded && (
          <div className={Style['loading-container']}>
            <Grid>
              <Loading color="success"></Loading>
            </Grid>
          </div>
        )}
        <Image
          className={Style.ProductImg}
          priority={true}
          unoptimized={() => ProductDescription.images[currentImageIndex]}
          src={ProductDescription.images[currentImageIndex]}
          alt={ProductDescription.title}
          width="240"
          height="240"
          onLoad={handleImageLoad}
        />
      </div>
      <div className={Style.Dots}>
        {ProductDescription.images.map((_, index) => (
          <span role="banner" key={index} className={`${Style.dot} ${currentImageIndex === index ? Style.active : ''}`} onClick={() => setCurrentImageIndex(index)}></span>
        ))}
      </div>
      <div className={Style['Product-Info']}>
        <p>{ProductDescription.price + '$'}</p>
        <p>{ProductDescription.title}</p>
        <p>{ProductDescription.description}</p>
        <button className={Style.AddCart} onClick={() => HandleClick(ProductDescription)}>
          <figure>
            {state.cart.includes(ProductDescription) ? (
              <Image className={Style.IconAdd} src={AgregadoCarrito} alt="added to cart" />
            ) : (
              <Image className={Style.IconAdd} src={AddToCart} alt="AddCart" />
            )}
          </figure>
        </button>
      </div>
      {state.menuProductInfoIsOpen ?? <ProductInfo />}
    </aside>
  );
}
