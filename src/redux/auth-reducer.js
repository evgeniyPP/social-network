import { authAPI } from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
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
const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

// Thunk Creator
export const getMe = () => dispatch => {
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getMe());
    }
  });
};

export const logout = () => dispatch => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export default authReducer;
