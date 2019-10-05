import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

export const store = {
  _state: {
    profilePage: {
      postsDB: [
        {
          id: 1,
          message: "Привет, мир",
          likes: 120
        },
        {
          id: 2,
          message: "Я пока не решил, что буду сюда писать. Может позже",
          likes: 1
        },
        {
          id: 3,
          message: "Начал учить хтмл. сложна",
          likes: 0
        },
        {
          id: 4,
          message: "Hello, how are you?",
          likes: 24
        },
        {
          id: 5,
          message: "Чтааа???",
          likes: 512
        }
      ],
      newPostText: ""
    },

    dialogsPage: {
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
          message: "Саня, ты где",
        },
        {
          id: 3,
          message: "Ответь!",
        },
        {
          id: 4,
          message: "Hello, how are you?",
        },
        {
          id: 5,
          message: "Чтооо???",
        }
      ],
      newMessageText: ""
    },

    navbar: {
      friendsDB: [
        {
          id: 1,
          name: "Андрей"
        },
        {
          id: 2,
          name: "Влад"
        },
        {
          id: 3,
          name: "Катя"
        }
      ]
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);
    this._callSubscriber(this._state);
  }
};