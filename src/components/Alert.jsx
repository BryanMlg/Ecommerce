import React, { useContext, useEffect, useState } from 'react';
import Style from '@style/Alert.module.scss';
import CloseIcon from '@assets/CloseIcon.svg';
import Image from 'next/image';
import { ContextApp } from '@context/ContextApp';

export default function Alert({ Message, isErrorLogin }) {
  const { state, toggleAlertNotification } = useContext(ContextApp);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
        toggleAlertNotification(); // Ocultar la notificación en el estado
      }, 3000);

      return () => {
        clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes de que expire el tiempo
      };
    }
    setVisible(true);
    toggleAlertNotification();
  }, [visible, toggleAlertNotification]);

  if (!visible) {
    return null; // Si el componente ya no es visible, no se renderiza nada
  }

  if (isErrorLogin) {
    return (
      <aside className={Style.container}>
        <div className={Style.alertContainer}>
          <p>{Message}</p>
        </div>
        {state.menuProductInfoIsOpen ?? <Alert />}
      </aside>
    );
  } else {
    return (
      <aside className={Style.Container}>
        <div className={Style.AlertContainer}>
          <Image className={Style.Close} src={CloseIcon} width={20} height={20} alt="Close" onClick={() => toggleAlertNotification()} />
          <p>{Message}</p>
        </div>
        {state.menuProductInfoIsOpen ?? <Alert />}
      </aside>
    );
  }
}