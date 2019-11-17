import React from "react";
import { NavLink } from "react-router-dom";
import css from "../../css/Dialogs/Username.module.css";

const Username = props => {
  return (
    <ul className={css.item}>
      {props.users.map(user => (
        <li key={user.id}>
          <NavLink
            key={user.id}
            className={css.link}
            to={"/dialogs/" + user.id}
          >
            {user.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Username;
