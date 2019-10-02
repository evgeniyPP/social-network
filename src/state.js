const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
          id: 1,
          messages: [
            { his: "Привет", mine: "Эй, привет, как дела" },
            {
              his: "Хорошо, ты куда пропал",
              mine: "Андрюх, замотался блин прости"
            },
            { his: "Да ладно, ничего", mine: "" },
            { his: "Норм всё", mine: "" }
          ]
        },
        {
          name: "Вася",
          id: 2,
          messages: [{ his: "Привет", mine: "Пока" }, { his: "Аучь", mine: "" }]
        }
      ]
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
    }
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});