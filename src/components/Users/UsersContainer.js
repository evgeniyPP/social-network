import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../utils/common/Preloader";
import {
  following,
  setCurrentPage,
  getUsers
} from "../../redux/reducers/users-reducer";
import {
  selectFindUsersDB,
  selectPageSize,
  selectTotalCount,
  selectCurrentPage,
  selectIsFetching,
  selectFollowingInProgress
} from "../../utils/selectors";

const UsersContainer = React.memo(props => {
  const { currentPage, pageSize } = props;
  const onPageChanged = (num = currentPage) => {
    props.getUsers(num, pageSize);
  };
  useEffect(onPageChanged, [currentPage]);

  return (
    <div>
      {props.isFetching ? <Preloader /> : null}
      <Users
        users={props.users}
        pageSize={props.pageSize}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        following={props.following}
        followingInProgress={props.followingInProgress}
      />
    </div>
  );
});

const mapStateToProps = state => {
  return {
    users: selectFindUsersDB(state),
    pageSize: selectPageSize(state),
    totalCount: selectTotalCount(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    followingInProgress: selectFollowingInProgress(state)
  };
};

export default connect(mapStateToProps, {
  following,
  setCurrentPage,
  getUsers
})(UsersContainer);
