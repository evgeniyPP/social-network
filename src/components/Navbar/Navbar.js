import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Friends from "./Friends/Friends";

const Navbar = props => {
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
      </ul>

      <Friends friends={props.state.friendsDB} />
    </div>
  );
};

export default Navbar;
