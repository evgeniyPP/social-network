import React from "react";
import Username from "./Username";
import MessagesContainer from "./Messages/MessagesContainer";
import css from "../../css/Dialogs/Dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={css.dialogs}>
      <h1>Dialogs</h1>
      <Username className={css.left} users={props.users} />
      <div className={css.right}>
        <MessagesContainer />
      </div>
    </div>
  );
};

export default Dialogs;
