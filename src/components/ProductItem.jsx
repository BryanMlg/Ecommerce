/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import SvgCarrito from '@assets/bt_add_to_cart.svg';
import ContextApp from '@context/ContextApp';
import Style from '@style/ProductItem.module.scss';
import Image from 'next/image';
import AgregadoCarrito from '@assets/bt_added_to_cart.svg';
import { Loading, Grid } from '@nextui-org/react';
import { useState } from 'react';
export default function ProductItem({ product }) {
  const { state, addToCart} = useContext(ContextApp);

  const HandleClick = (item) => {
    addToCart(item);
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={Style.ProductItem}>
      <div className={Style['image-container']}>
        {!imageLoaded && (
          <div className={Style['loading-container']}>
            <Grid>
              <Loading color="success"></Loading>
            </Grid>
          </div>
        )}
        <Image priority={true} unoptimized={() => product.images[0]} src={product.images[0]} alt={product.title} width="240" height="240" onLoad={handleImageLoad} />
      </div>
      <div className={Style['product-info']}>
        <div>
          <p>{product.price}$</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => HandleClick(product)}>{state.cart.includes(product) ? <Image src={AgregadoCarrito} alt="added to cart" /> : <Image src={SvgCarrito} alt="AddCart" />}</figure>
      </div>
    </div>
  );
}
