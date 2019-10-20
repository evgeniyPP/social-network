import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import usersAPI from "../../api/usersAPI";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    if (!this.props.users.length) {
      usersAPI
        .getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalCount(data.totalCount);
        });
    }
  }

  onPageChanged = num => {
    this.props.setCurrentPage(num);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(num, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
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
    isFetching: state.usersPage.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching
  }
)(UsersContainer);
