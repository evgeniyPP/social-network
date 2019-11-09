import { addMessageActionCreator } from "../../../redux/dialogs-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import { selectMessagesDB } from "../../../utils/selectors";

const mapStateToProps = state => {
  return {
    messages: selectMessagesDB(state)
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
