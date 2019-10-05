const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  usersDB: [
    {
      name: "Андрей",
      id: 1
    },
    {
      name: "Вася",
      id: 2
    }
  ],
  messagesDB: [
    {
      id: 1,
      message: "Привет, Саня",
      likes: 120
    },
    {
      id: 2,
      message: "Саня, ты где"
    },
    {
      id: 3,
      message: "Ответь!"
    },
    {
      id: 4,
      message: "Hello, how are you?"
    },
    {
      id: 5,
      message: "Чтооо???"
    }
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      };
      state.messagesDB.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default dialogsReducer;
