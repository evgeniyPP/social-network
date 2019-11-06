const ADD_MESSAGE = "ADD-MESSAGE";

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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesDB: [
          ...state.messagesDB,
          { id: Date.now(), message: action.newMessageText }
        ]
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = newMessageText => ({
  type: ADD_MESSAGE,
  newMessageText
});

export default dialogsReducer;
