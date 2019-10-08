import React from "react";
import Username from "./Username/Username";
import s from "./Dialogs.module.css";
import MessagesContainer from "./Messages/MessagesContainer";
import { store } from "../../redux/redux-store";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <Username
        className={s.left}
        users={store.getState().dialogsPage.usersDB}
      />
      <div className={s.right}>
        <MessagesContainer />
      </div>
    </div>
  );
};

export default Dialogs;
