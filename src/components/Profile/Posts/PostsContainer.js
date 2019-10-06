import React from "react";
import Posts from "./Posts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";

const PostsContainer = props => {
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const newPostTextChange = text => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <Posts
      addPost={addPost}
      updateNewPostText={newPostTextChange}
      posts={state.profilePage.postsDB}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default PostsContainer;
