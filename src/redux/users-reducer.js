import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS";

const initialState = {
  findUsersDB: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
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
        isFetching: action.isFetching
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

// Action Creators
export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = num => ({ type: SET_CURRENT_PAGE, num });
export const setTotalCount = total => ({ type: SET_TOTAL_COUNT, total });
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId
});

// Thunk Creators
export const getUsers = (currentPage, pageSize) => dispatch => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
  });
};
export const following = (isFollow, user) => dispatch => {
  dispatch(toggleFollowingInProgress(true, user.id));
  if (isFollow === "FOLLOW") {
    usersAPI.getFollow(user.id).then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(user.id));
      }
      dispatch(toggleFollowingInProgress(false, user.id));
    });
  } else if (isFollow === "UNFOLLOW") {
    usersAPI.getUnfollow(user.id).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(user.id));
        dispatch(toggleFollowingInProgress(false, user.id));
      }
    });
  } else {
    dispatch(toggleFollowingInProgress(false, user.id));
    throw new Error("Wrong following request");
  }
};

export default usersReducer;
