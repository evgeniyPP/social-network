import React from "react";
import { NavLink } from "react-router-dom";
import css from "../../css/Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <ul>
        <li className={css.item}>
          <NavLink to="/profile" activeClassName={css.active}>
            Профиль
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/dialogs" activeClassName={css.active}>
            Диалоги
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/news" activeClassName={css.active}>
            Новости
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/music" activeClassName={css.active}>
            Музыка
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/settings" activeClassName={css.active}>
            Настройки
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/users" activeClassName={css.active}>
            Пользователи
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
