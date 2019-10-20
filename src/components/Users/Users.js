import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import userPhoto from "../../images/avatar.jpg";
import usersAPI from "../../api/usersAPI";

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
              <NavLink to={"./profile/" + user.id}>
                <img
                  src={
                    user.photos.small !== null ? user.photos.small : userPhoto
                  }
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    usersAPI.getUnfollow(user.id).then(data => {
                      if (data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    usersAPI.getFollow(user.id).then(data => {
                      if (data.resultCode === 0) {
                        props.follow(user.id);
                      }
                    });
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
