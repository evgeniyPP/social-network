import React from "react";
import s from "./Messages.module.css";
import { Message } from "./Message/Message";

const Messages = props => {
  let newMessageElement = React.createRef();

  const addMessage = () => {
    props.addMessage();
  };

  const onNewMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessage(text);
  };

  return (
    <div>
      <div>
        {props.messages.map(message => {
          return <Message key={message.id} id={message.id} text={message.message} />;
        })}
      </div>
      <div className={s.newMessage}>
        <textarea
          ref={newMessageElement}
          placeholder="Новое сообщение"
          value={props.newMessageText}
          onChange={onNewMessageChange}
        />
        <button onClick={addMessage} href="#!">
          Отправить сообщение
        </button>
      </div>
    </div>
  );
};

export default Messages;
