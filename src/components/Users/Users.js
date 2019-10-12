import React from "react";
import * as axios from 'axios';
import s from "./Users.module.css";
import userPhoto from '../../images/avatar.jpg';

const Users = props => {
  if (!props.users.length) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    });
  }

  return (
    <div className={s.usersPage}>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" />
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
