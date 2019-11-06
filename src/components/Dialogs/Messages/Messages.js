import React from "react";
import { Message } from "./Message/Message";
import NewMessage from "./NewMessage";

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
