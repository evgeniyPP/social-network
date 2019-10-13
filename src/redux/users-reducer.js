const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

const initialState = {
  findUsersDB: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        findUsersDB: state.findUsersDB.map(user => {
          if (user.id === action.userId) return { ...user, followed: true };
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        findUsersDB: state.findUsersDB.map(user => {
          if (user.id === action.userId) return { ...user, followed: false };
          return user;
        })
      };
    case SET_USERS:
      return {
        ...state,
        findUsersDB: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.num
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.total
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching : action.isFetching
      };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setCurrentPageAC = num => ({ type: SET_CURRENT_PAGE, num });
export const setTotalCountAC = total => ({ type: SET_TOTAL_COUNT, total });
export const toggleIsFetchingAC = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export default usersReducer;
