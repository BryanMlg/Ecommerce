import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  menuMobileIsOpen: false,
  menuProductInfoIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [ProductDescription, setProductDescription] = useState(null);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload],
    });
  };

  const RemoveFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
      menuIsOpen: false,
      menuMobileIsOpen: false,
      menuProductInfoIsOpen: false,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
      orderIsOpen: false,
      menuMobileIsOpen: false,
      menuProductInfoIsOpen: false,
    });
  };

  const toggleMenuMobile = () => {
    setState({
      ...state,
      menuMobileIsOpen: !state.menuMobileIsOpen,
      menuIsOpen: false,
      orderIsOpen: false,
      menuProductInfoIsOpen: false,
    });
  };

  const toggleMenuProductInfo = (product) => {
    setProductDescription(product);
    setState({
      ...state,
      menuProductInfoIsOpen: !state.menuProductInfoIsOpen,
      orderIsOpen: false,
      menuIsOpen: false,
      menuMobileIsOpen: false,
    });
  };

  return { state, addToCart, RemoveFromCart, toggleOrder, toggleMenu, toggleMenuMobile, toggleMenuProductInfo, ProductDescription };
};
export default useInitialState;
