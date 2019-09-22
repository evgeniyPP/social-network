import React from "react";
import Post from "./Post/Post";
import { PostsDB } from "../../../database";
import s from "./Posts.module.css";

const Posts = () => {
  return (
    <div>
      <div className={s.new_post}>
        <textarea placeholder="Создать новый пост"></textarea>
        <a href="#!">Добавить пост</a>
      </div>
      {PostsDB.map(post => {
        return <Post id={post.id} message={post.message} likes={post.likes} />;
      })}
    </div>
  );
};

export default Posts;
