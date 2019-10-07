import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";
import StoreContext from '../../../StoreContext';

const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const onNewMessageChange = text => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Messages
            addMessage={addMessage}
            updateNewMessage={onNewMessageChange}
            messages={state.dialogsPage.messagesDB}
            newMessageText={state.dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
