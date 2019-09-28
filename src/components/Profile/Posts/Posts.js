import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div>
      <div className={s.new_post}>
        <textarea ref={newPostElement} placeholder="Создать новый пост"></textarea>
        <a onClick={ addPost } href="#!">Добавить пост</a>
      </div>
      {props.posts.map(post => {
        return <Post id={post.id} message={post.message} likes={post.likes} />;
      })}
    </div>
  );
};

export default Posts;
