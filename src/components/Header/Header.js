import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <img
        className={s.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikimedia_Cloud_Services_logo.svg"
        alt=""
      />
      <h1>MySocial</h1>
    </div>
  );
};

export default Header;
