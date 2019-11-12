import React from "react";
import Paginator from "./Paginator";
import User from "./User";
import s from "./Users.module.css";

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
    <div className={s.usersPage}>
      <Paginator
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {users.map(user => (
        <User
          user={user}
          following={following}
          followingInProgress={followingInProgress}
        />
      ))}
    </div>
  );
};

export default Users;
