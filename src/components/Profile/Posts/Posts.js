import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = props => {
  let newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  };

  const onNewPostTextChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={s.new_post}>
        <textarea
          ref={newPostElement}
          placeholder="Создать новый пост"
          value={props.newPostText}
          onChange={onNewPostTextChange}
        />
        <button onClick={addPost} href="#!">
          Добавить пост
        </button>
      </div>
      {props.posts.map(post => {
        return <Post id={post.id} message={post.message} likes={post.likes} />;
      })}
    </div>
  );
};

export default Posts;
