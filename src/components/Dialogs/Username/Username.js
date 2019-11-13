import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Username.module.css";

const Username = props => {
  return (
    <ul className={s.item}>
      {props.users.map(user => (
        <li key={user.id}>
          <NavLink key={user.id} className={s.link} to={"/dialogs/" + user.id}>
            {user.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Username;
