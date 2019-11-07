import React from "react";
import s from "./Posts.module.css";
import { reduxForm, Field } from "redux-form";
import { required, maxLength } from "../../../utils/validators";
import Element from "../../common/FormsControls/FormsControls";

const thisMaxLength = maxLength(100);

const NewPost = props => {
  const textarea = Element("textarea");
  return (
    <form className={s.new_post} onSubmit={props.handleSubmit}>
      <Field
        component={textarea}
        name="newPostText"
        placeholder="Создать новый пост"
        validate={[required, thisMaxLength]}
      />
      <button>Добавить пост</button>
    </form>
  );
};

export default reduxForm({
  form: "profile_new_post"
})(NewPost);
