import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.post}>
      <img
        className={s.avatar}
        src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
        alt=""
      />
      <div className={s.single_post}>
        <p className={s.text}>{props.message}</p>
        <p className={s.likes}>Лайков: {props.likes}</p>
      </div>
    </div>
  );
};

export default Post;
