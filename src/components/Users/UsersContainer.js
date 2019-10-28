import React from "react";
import { connect } from "react-redux";
import { following, setCurrentPage, getUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = num => {
    this.props.setCurrentPage(num);
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
    users: state.usersPage.findUsersDB,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
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
