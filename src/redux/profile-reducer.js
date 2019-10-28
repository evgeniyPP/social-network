import { usersAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET-PROFILE";

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
  newPostText: "",
  profile: null
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
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

// Action Creator
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
const setProfile = profile => ({ type: SET_PROFILE, profile });

// Thunk Creator
export const getProfile = userId => dispatch => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setProfile(response.data));
  });
};

export default profileReducer;
