import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    messages: state.dialogsPage.messagesDB,
    newMessageText: state.dialogsPage.newMessageText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessage: text => {
      dispatch(updateNewMessageTextActionCreator(text));
    }
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
