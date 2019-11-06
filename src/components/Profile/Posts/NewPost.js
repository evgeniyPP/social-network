import React from "react";
import s from "./Posts.module.css";
import { reduxForm, Field } from "redux-form";

const NewPost = props => {
  return (
    <form className={s.new_post} onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name="newPostText"
        placeholder="Создать новый пост"
      />
      <button>Добавить пост</button>
    </form>
  );
};

export default reduxForm({
  form: "profile_new_post"
})(NewPost);
