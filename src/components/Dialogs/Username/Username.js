import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Username.module.css";

const Username = props => {
  return (
    <ul className={s.item}>
      {props.users.map(user => (
        <li>
          <NavLink to={"/dialogs/" + user.id}>{user.name}</NavLink>
        </li>
      ))}
      <li>
        <NavLink to="/dialogs/3">Света</NavLink>
      </li>
      <li>
        <NavLink to="/dialogs/4">Петя</NavLink>
      </li>
      <li>
        <NavLink to="/dialogs/5">Вова</NavLink>
      </li>
      <li>
        <NavLink to="/dialogs/6">Гена</NavLink>
      </li>
    </ul>
  );
};

export default Username;
