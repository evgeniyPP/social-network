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
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

// Action Creator
const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login }
});

// Thunk Creator
export const getMe = () => dispatch => {
  authAPI.me().then(response => {
    if (response.data.result !== 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login));
    }
  });
};

export default authReducer;
