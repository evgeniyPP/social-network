// state.usersPage
export const selectFindUsersDB = state => state.usersPage.findUsersDB;
export const selectPageSize = state => state.usersPage.pageSize;
export const selectTotalCount = state => state.usersPage.totalCount;
export const selectCurrentPage = state => state.usersPage.currentPage;
export const selectIsFetching = state => state.usersPage.isFetching;
export const selectFollowingInProgress = state =>
  state.usersPage.followingInProgress;

// state.profilePage
export const selectProfile = state => state.profilePage.profile;
export const selectStatus = state => state.profilePage.status;
export const selectPostsDB = state => state.profilePage.postsDB;

// state.auth
export const selectIsAuth = state => state.auth.isAuth;
export const selectId = state => state.auth.id;
export const selectLogin = state => state.auth.login;

// state.dialogsPage
export const selectUsersDB = state => state.dialogsPage.usersDB;
export const selectMessagesDB = state => state.dialogsPage.messagesDB;
