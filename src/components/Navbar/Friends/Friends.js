import React from "react";
import s from "./Friends.module.css";

const Friends = props => {
  let friend = props.friends.map(friend => {
    return (
      <div key={friend.id} className={s.friendInstance}>
        <img
          className={s.friendIcon}
          src="https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
          alt="icon"
        />
        <p className={s.friend}>{friend.name}</p>
      </div>
    );
  });

  return <div className={s.friendContainer}>{friend}</div>;
};

export default Friends;
