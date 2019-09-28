import React from "react";
import s from "./Messages.module.css";
import "./Messages.css";

const Messages = props => {
  let classAdd = props.userId === "1" ? "iam" : "friend";

  return (
    <div>
      <p className={s.messages + " " + classAdd}>{props.message}</p>
    </div>
  );
};

export default Messages;
