import React from "react";
import Username from "./Username/Username";
import s from "./Dialogs.module.css";
import MessagesContainer from "./Messages/MessagesContainer";
import { Redirect } from "react-router-dom";

const Dialogs = props => {
  if (props.isAuth === false) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <Username className={s.left} users={props.users} />
      <div className={s.right}>
        <MessagesContainer />
      </div>
    </div>
  );
};

export default Dialogs;
