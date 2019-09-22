import React from "react";
import Posts from "./Posts/Posts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <img src="https://picsum.photos/id/993/1000/150" alt="main" />
      <Posts />
    </div>
  );
};

export default Profile;
