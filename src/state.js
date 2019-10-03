const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likes: 0
      };
      this._state.profilePage.postsDB.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesDB.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = text => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});