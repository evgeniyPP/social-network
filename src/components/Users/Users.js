import React from "react";
import Paginator from "./Paginator";
import User from "./User";
import css from "../../css/Users/Users.module.css";

const Users = ({
  users,
  pageSize,
  totalCount,
  currentPage,
  onPageChanged,
  following,
  followingInProgress
}) => {
  return (
    <div className={css.usersPage}>
      <Paginator
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {users.map(user => (
        <User
          key={user.id}
          user={user}
          following={following}
          followingInProgress={followingInProgress}
        />
      ))}
    </div>
  );
};

export default Users;
