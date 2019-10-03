import React from "react";
import Username from "./Username/Username";
import Messages from "./Messages/Messages";
import s from "./Dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <Username className={s.left} users={props.dialogsPage.usersDB} />
      <div className={s.right}>
        <Messages messages={props.dialogsPage.messagesDB} newMessageText={props.dialogsPage.newMessageText} dispatch={props.dispatch} />
      </div>
    </div>
  );
};

export default Dialogs;
