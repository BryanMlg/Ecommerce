import React, { useContext, useEffect, useState } from 'react';
import Style from '@style/Alert.module.scss';
import CloseIcon from '@assets/CloseIcon.svg';
import Image from 'next/image';
import { ContextApp } from '@context/ContextApp';

export default function Alert({ Message, isErrorLogin }) {
  const { state, toggleAlertNotification } = useContext(ContextApp);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      toggleAlertNotification();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [toggleAlertNotification]);

  if (!visible) {
    return null; // Render nothing if not visible
  }

  if (isErrorLogin) {
    return (
      <aside className={Style.container}>
        <div className={Style.alertContainer}>
          <p>{Message}</p>
        </div>
        {state.alertNotification ?? <Alert />}
      </aside>
    );
  } else {
    return (
      <aside className={Style.Container}>
        <div className={Style.AlertContainer}>
          <Image className={Style.Close} src={CloseIcon} width={20} height={20} alt="Close" onClick={() => toggleAlertNotification()} />
          <p>{Message}</p>
        </div>
        {state.alertNotification ?? <Alert />}
      </aside>
    );
  }
}
