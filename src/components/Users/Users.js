import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../images/avatar.jpg";

const Users = props => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  if (pagesCount > 15) pagesCount = 15;
  const pagesNum = [];
  for (let i = 1; i <= pagesCount; i++) pagesNum.push(i);

  return (
    <div className={s.usersPage}>
      <div>
        {pagesNum.map(num => (
          <span
            className={props.currentPage === num && s.selectedPage}
            onClick={() => {
              props.onPageChanged(num);
            }}
          >
            {num}
          </span>
        ))}
      </div>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                alt=""
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
