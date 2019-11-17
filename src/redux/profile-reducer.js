import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
const ADD_POST = "epp-social-network/profilePage/ADD-POST";
const SET_PROFILE = "epp-social-network/profilePage/SET-PROFILE";
const SET_STATUS = "epp-social-network/profilePage/SET-STATUS";
const DELETE_POST = "epp-social-network/profilePage/DELETE-POST";
const SET_PHOTO = "epp-social-network/profilePage/SET-PHOTO";

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
    case SET_PHOTO:
      return { ...state, profile: { ...state.profile, photos: action.photo } };
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
const setPhoto = photo => ({ type: SET_PHOTO, photo });

// Thunk Creator
export const getProfile = userId => async dispatch => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setProfile(response.data));
};
export const getStatus = userId => async dispatch => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = status => async dispatch => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = photo => async dispatch => {
  const response = await profileAPI.savePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.data.photos));
  }
};
export const saveProfileData = newProfileData => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfileData(newProfileData);
  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    let errorName = response.data.messages[0]
      .slice(
        response.data.messages[0].indexOf(">") + 1,
        response.data.messages[0].indexOf(")")
      )
      .toLocaleLowerCase();
    dispatch(
      stopSubmit("profile-edit", {
        contacts: {
          [errorName]: response.data.messages[0].slice(
            0,
            response.data.messages[0].indexOf("(")
          )
        }
      })
    );
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
