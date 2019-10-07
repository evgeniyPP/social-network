import React from "react";
import Posts from "./Posts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import StoreContext from '../../../StoreContext';

const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const newPostTextChange = text => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <Posts
            addPost={addPost}
            updateNewPostText={newPostTextChange}
            posts={state.profilePage.postsDB}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
