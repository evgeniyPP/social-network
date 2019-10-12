import React from "react";
import * as axios from "axios";
import s from "./Users.module.css";
import userPhoto from "../../images/avatar.jpg";

class Users extends React.Component {
  componentDidMount() {
    if (!this.props.users.length) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount);
        });
    }
  }

  onPageChanged(num) {
    this.props.setCurrentPage(num);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    if (pagesCount > 15) pagesCount = 15;
    const pagesNum = [];
    for (let i = 1; i <= pagesCount; i++) pagesNum.push(i);

    return (
      <div className={s.usersPage}>
        <div>
          {pagesNum.map(num => (
            <span
              className={this.props.currentPage === num && s.selectedPage}
              onClick={() => {
                this.onPageChanged(num);
              }}
            >
              {num}
            </span>
          ))}
        </div>
        {this.props.users.map(user => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={
                    user.photos.small !== null ? user.photos.small : userPhoto
                  }
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
