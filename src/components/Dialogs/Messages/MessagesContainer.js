import { connect } from "react-redux";
import Messages from "./Messages";
import { addMessageActionCreator } from "../../../redux/reducers/dialogs-reducer";
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
