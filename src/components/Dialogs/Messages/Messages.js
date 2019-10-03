import React from "react";
import s from "./Messages.module.css";
import { Message } from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../../state";

const Messages = props => {
  let newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onNewMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div>
      <div>
        {props.messages.map(message => {
          return <Message id={message.id} text={message.message} />;
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
