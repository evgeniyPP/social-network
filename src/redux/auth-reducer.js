import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "epp-social-network/auth/SET_USER_DATA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

// Action Creator
const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth }
});

// Thunk Creator
export const getMe = () => async dispatch => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    return dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getMe());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Undefined Error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async dispatch => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
