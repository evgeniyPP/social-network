import { usersAPI } from "../api/api";
import { changeObjectPropInArrayById } from "../utils/helpers";

const FOLLOW = "epp-social-network/usersPage/FOLLOW";
const UNFOLLOW = "epp-social-network/usersPage/UNFOLLOW";
const SET_USERS = "epp-social-network/usersPage/SET-USERS";
const SET_CURRENT_PAGE = "epp-social-network/usersPage/SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "epp-social-network/usersPage/SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "epp-social-network/usersPage/TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS =
  "epp-social-network/usersPage/TOGGLE-FOLLOWING-IN-PROGRESS";

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
        findUsersDB: changeObjectPropInArrayById(
          state.findUsersDB,
          action.userId,
          "id",
          { followed: true }
        )
      };
    case UNFOLLOW:
      return {
        ...state,
        findUsersDB: changeObjectPropInArrayById(
          state.findUsersDB,
          action.userId,
          "id",
          { followed: false }
        )
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
export const getUsers = (page, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
};

export const following = (isFollow, user) => async dispatch => {
  dispatch(toggleFollowingInProgress(true, user.id));
  if (isFollow === "FOLLOW") {
    const data = await usersAPI.getFollow(user.id);
    if (data.resultCode === 0) {
      dispatch(followSuccess(user.id));
    }
    dispatch(toggleFollowingInProgress(false, user.id));
  } else if (isFollow === "UNFOLLOW") {
    const data = await usersAPI.getUnfollow(user.id);
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(user.id));
      dispatch(toggleFollowingInProgress(false, user.id));
    }
  } else {
    dispatch(toggleFollowingInProgress(false, user.id));
    throw new Error("Wrong following request");
  }
};

export default usersReducer;
