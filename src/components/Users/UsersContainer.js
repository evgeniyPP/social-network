import React from "react";
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

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = num => {
    this.props.getUsers(num, this.props.pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          following={this.props.following}
          followingInProgress={this.props.followingInProgress}
        />
      </div>
    );
  }
}

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
