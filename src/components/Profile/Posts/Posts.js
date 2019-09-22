import React from "react";
import Post from "./Post/Post";
import { PostsDB } from "../../../database";
import s from "./Posts.module.css";

const Posts = () => {
  return (
    <div>
      <textarea placeholder="New Post will be here"></textarea>
      {PostsDB.map(post => {
        return <Post id={post.id} message={post.message} likes={post.likes} />;
      })}
    </div>
  );
};

export default Posts;
