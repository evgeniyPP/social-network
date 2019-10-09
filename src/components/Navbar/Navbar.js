import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Friends from "./Friends/Friends";
import { store } from "../../redux/redux-store";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>
            Профиль
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            Диалоги
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>
            Новости
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>
            Музыка
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/settings" activeClassName={s.active}>
            Настройки
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/users" activeClassName={s.active}>
            Пользователи
          </NavLink>
        </li>
      </ul>
      <Friends friends={store.getState().navbar.friendsDB} />;
    </div>
  );
};

export default Navbar;
