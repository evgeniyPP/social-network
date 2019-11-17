import React from "react";
import css from "../../../css/Profile/Posts.module.css";

const Post = props => {
  return (
    <div className={css.post}>
      <img
        className={css.avatar}
        src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
        alt=""
      />
      <div className={css.single_post}>
        <p className={css.text}>{props.message}</p>
        <p className={css.likes}>Лайков: {props.likes}</p>
      </div>
    </div>
  );
};

export default Post;
