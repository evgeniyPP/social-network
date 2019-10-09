import React from "react";
import s from "./Users.module.css";

const Users = props => {
  if (!props.users.length) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg",
        name: "Дмитрий",
        status: "Ура!!!",
        location: {
          country: "Россия",
          city: "Москва"
        },
        followed: false
      },
      {
        id: 2,
        photoUrl:
          "https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png",
        name: "Коля",
        status: "Дима мой друг",
        location: {
          country: "Россия",
          city: "Питер"
        },
        followed: false
      },
      {
        id: 3,
        photoUrl:
          "https://icon-library.net/images/icon-avatars/icon-avatars-12.jpg",
        name: "Ольга",
        status: "Маникюр за 100 рублей, звоните",
        location: {
          country: "Украина",
          city: "Киев"
        },
        followed: true
      },
      {
        id: 4,
        photoUrl:
          "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",
        name: "Петя",
        status: "Беру деньги в долг. Много",
        location: {
          country: "Россия",
          city: "Казань"
        },
        followed: false
      },
      {
        id: 5,
        photoUrl:
          "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png",
        name: "Гена",
        status: "Лимон – лимонад, блаблабла",
        location: {
          country: "Беларусь",
          city: "Минск"
        },
        followed: false
      }
    ]);
  }

  return (
    <div className={s.usersPage}>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} alt="" />
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
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
