import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div>
      <div className={s.new_post}>
        <textarea placeholder="Создать новый пост"></textarea>
        <a href="#!">Добавить пост</a>
      </div>
      {props.posts.map(post => {
        return <Post id={post.id} message={post.message} likes={post.likes} />;
      })}
    </div>
  );
};

export default Posts;
