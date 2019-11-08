import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className={s.header}>
      <img
        className={s.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikimedia_Cloud_Services_logo.svg"
        alt=""
      />

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            <span className={s.username}>{props.login}</span> -
            <button className={s.logout} onClick={props.logout}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
      <h1>MySocial</h1>
    </div>
  );
};

export default Header;
