const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsDB: [
          ...state.postsDB,
          {
            id: 6,
            message: state.newPostText,
            likes: 0
          }
        ],
        newPostText: ""
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;
