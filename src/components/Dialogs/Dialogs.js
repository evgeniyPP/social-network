import React from "react";
import Username from "./Username/Username";
import Messages from "./Messages/Messages";
import s from "./Dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <Username className={s.left} users={props.state.usersDB} />
      <div className={s.right}>
        <Messages userId="1" message="Hello" />
        <Messages userId="2" message="Hi! How r u" />
      </div>
    </div>
  );
};

export default Dialogs;
