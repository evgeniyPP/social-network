import { getMe } from "./auth-reducer";
const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

const initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

// Action Creator
const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
});

// Thunk Creator
export const initializeApp = () => dispatch => {
  let getMePromise = dispatch(getMe());

  Promise.all([getMePromise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
