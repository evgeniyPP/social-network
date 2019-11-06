import { addMessageActionCreator } from "../../../redux/dialogs-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    messages: state.dialogsPage.messagesDB
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: newMessageText => {
      dispatch(addMessageActionCreator(newMessageText));
    }
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
