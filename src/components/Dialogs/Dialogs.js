import React from "react";
import Username from "./Username/Username";
import s from "./Dialogs.module.css";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = props => {
  let state = props.store.getState();
  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <Username className={s.left} users={state.dialogsPage.usersDB} />
      <div className={s.right}>
        <MessagesContainer store={props.store} />
      </div>
    </div>
  );
};

export default Dialogs;
