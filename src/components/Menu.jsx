import React from "react";
import Style from "@style/Menu.module.scss";
export default function Menu() {
  return (
    <div className={Style["desktop-menu"]}>
      <ul>
        <li>
          <a href="/" className={Style.title}>
            My orders
          </a>
        </li>

        <li>
          <a href="/">My account</a>
        </li>

        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
}
