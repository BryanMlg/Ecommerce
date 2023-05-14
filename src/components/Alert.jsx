import React from 'react';
import Style from "@style/Alert.module.scss";
import CloseIcon from "@assets/CloseIcon.svg";
import Image from 'next/image';
export default function ProductDetail({Message, isErrorLogin}) {
  if(isErrorLogin){
    return (
      <aside className={Style.container}>
        <div className={Style.alertContainer}>
          <p>{Message}</p>
        </div>
      </aside>
    );
  }else{
    return (
      <aside className={Style.container}>
        <div className={Style.alertContainer}>
          <Image className={Style.Close} src={CloseIcon} width={20} height={20} alt='Close'/>
          <p>{Message}</p>
        </div>
      </aside>
    );
  }
}
