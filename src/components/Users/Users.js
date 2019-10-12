import React from "react";
import * as axios from "axios";
import s from "./Users.module.css";
import userPhoto from "../../images/avatar.jpg";

class Users extends React.Component {
  componentDidMount() {
    if (!this.props.users.length) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div className={s.usersPage}>
        {this.props.users.map(user => (
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
                      this.props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
  }
}

export default Users;