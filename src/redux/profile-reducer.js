import { profileAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";

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
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsDB: [
          ...state.postsDB,
          {
            id: Date.now(),
            message: action.newPostText,
            likes: 0
          }
        ]
      };
    case DELETE_POST:
      return {
        ...state,
        postsDB: state.postsDB.filter(post => post.id !== action.postId)
      };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

// Action Creator
export const addPostActionCreator = newPostText => ({
  type: ADD_POST,
  newPostText
});
export const deletePost = postId => ({ type: DELETE_POST, postId });
const setProfile = profile => ({ type: SET_PROFILE, profile });
const setStatus = status => ({ type: SET_STATUS, status });

// Thunk Creator
export const getProfile = userId => dispatch => {
  profileAPI.getProfile(userId).then(response => {
    dispatch(setProfile(response.data));
  });
};
export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
