import React from "react";
import Username from "./Username/Username";
import Messages from "./Messages/Messages";
import { UsersDB } from "../../database";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <Username className={s.left} users={UsersDB} />
      <div className={s.right}>
        <Messages message="Hello" />
        <Messages message="How r u" />
      </div>
    </div>
  );
};

export default Dialogs;
