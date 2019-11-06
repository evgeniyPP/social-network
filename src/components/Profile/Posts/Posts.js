import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost";

const Posts = props => {
  const addPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <NewPost onSubmit={addPost} />
      {props.posts.map(post => {
        return (
          <Post
            key={post.id}
            id={post.id}
            message={post.message}
            likes={post.likes}
          />
        );
      })}
    </div>
  );
};

export default Posts;
