import React from "react";
import { NavLink } from "react-router-dom";
import css from "../../css/Header/Header.module.css";

const Header = props => {
  return (
    <div className={css.header}>
      <img
        className={css.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikimedia_Cloud_Services_logo.svg"
        alt=""
      />

      <div className={css.loginBlock}>
        {props.isAuth ? (
          <div>
            <span className={css.username}>{props.login}</span> -
            <button className={css.logout} onClick={props.logout}>
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
