import React from "react";
import Username from "./Username/Username";
import s from "./Dialogs.module.css";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = props => {
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
