import React from "react";
import NewMessage from "./NewMessage";
import css from "../../../css/Dialogs/Messages.module.css";

const Message = props => <p className={css.message}>{props.text}</p>;

const Messages = props => {
  const addMessage = values => {
    props.addMessage(values.newMessageText);
  };

  return (
    <div>
      <div>
        {props.messages.map(message => {
          return (
            <Message key={message.id} id={message.id} text={message.message} />
          );
        })}
      </div>
      <NewMessage onSubmit={addMessage} />
    </div>
  );
};

export default Messages;
