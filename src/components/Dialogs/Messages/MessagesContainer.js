import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";

const MessagesContainer = props => {
  let state = props.store.getState();
  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onNewMessageChange = text => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Messages
      addMessage={addMessage}
      updateNewMessage={onNewMessageChange}
      messages={state.dialogsPage.messagesDB}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default MessagesContainer;
