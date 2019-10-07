import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import s from "./Profile.module.css";

const Profile = props => {
  return (
    <div className={s.profile}>
      <img src="https://picsum.photos/id/993/1000/150" alt="main" />
      <PostsContainer />
    </div>
  );
};

export default Profile;
