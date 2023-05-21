import React from 'react';
import Style from '@style/Alert.module.scss';
import CloseIcon from '@assets/CloseIcon.svg';
import Image from 'next/image';
import { useContext } from 'react';
import { ContextApp } from '@context/ContextApp';
export default function Alert({ Message, isErrorLogin }) {
  const { state, toggleAlertNotification } = useContext(ContextApp);
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
