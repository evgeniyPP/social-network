import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/avatar.jpg";

const User = ({ user, following, followingInProgress }) => {
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={"./profile/" + user.id}>
            <img
              src={user.photos.small !== null ? user.photos.small : userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                following("UNFOLLOW", user);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                following("FOLLOW", user);
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
  );
};

export default User;
