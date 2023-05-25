import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  menuMobileIsOpen: false,
  menuProductInfoIsOpen: false,
  alertNotification: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [ProductDescription, setProductDescription] = useState(null);
  const [message, setMessage] = useState('');
  //true = error false = success
  const [typeAlert, setTypeAlert] = useState(false);
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

  const toggleAlertNotification = (AlertMessage, TypeAlert) => {
    setMessage(AlertMessage);
    setTypeAlert(TypeAlert);
    setState({
      ...state,
      alertNotification: !state.alertNotification,
    });
  };

  return { state, addToCart, RemoveFromCart, toggleOrder, toggleMenu, toggleMenuMobile, toggleMenuProductInfo, ProductDescription, toggleAlertNotification, message, typeAlert };
};
export default useInitialState;
