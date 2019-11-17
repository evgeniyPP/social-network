import { authAPI, securityAPI } from "../../assets/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "epp-social-network/auth/SET_USER_DATA";
const SET_CAPTCHA = "epp-social-network/auth/SET-CAPTCHA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha
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
const setCaptcha = captcha => ({
  type: SET_CAPTCHA,
  captcha
});

// Thunk Creator
export const getMe = () => async dispatch => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    return dispatch(setUserData(id, email, login, true));
  }
};

export const login = (
  email,
  password,
  rememberMe,
  captcha
) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getMe());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
    }
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

export const getCaptcha = () => async dispatch => {
  const response = await securityAPI.getCaptcha();
  const captcha = response.data.url;
  dispatch(setCaptcha(captcha));
};

export default authReducer;
