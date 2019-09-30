import React from "react";
import Posts from "./Posts/Posts";
import s from "./Profile.module.css";

const Profile = props => {
  return (
    <div className={s.profile}>
      <img src="https://picsum.photos/id/993/1000/150" alt="main" />
      <Posts
        posts={props.profilePage.postsDB}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
