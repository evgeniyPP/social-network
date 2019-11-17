import React from "react";
import { reduxForm, Field } from "redux-form";
import Element from "../../../utils/common/FormsControls";
import { required, maxLength } from "../../../utils/validators";
import css from "../../../css/Profile/Posts.module.css";

const thisMaxLength = maxLength(100);
const textarea = Element("textarea");

const NewPost = props => {
  return (
    <form className={css.new_post} onSubmit={props.handleSubmit}>
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
