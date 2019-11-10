import React, { useEffect } from "react";
import { connect } from "react-redux";
import { following, setCurrentPage, getUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
  selectFindUsersDB,
  selectPageSize,
  selectTotalCount,
  selectCurrentPage,
  selectIsFetching,
  selectFollowingInProgress
} from "../../utils/selectors";

const UsersContainer = props => {
  const onPageChanged = (num = props.currentPage) => {
    props.getUsers(num, props.pageSize);
  };

  useEffect(onPageChanged, [props.currentPage]);

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
};

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

export default connect(
  mapStateToProps,
  {
    following,
    setCurrentPage,
    getUsers
  }
)(UsersContainer);
