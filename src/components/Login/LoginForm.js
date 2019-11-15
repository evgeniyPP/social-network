import React from "react";
import { reduxForm } from "redux-form";
import { required, maxLength } from "../../utils/validators";
import Element, { createField } from "../common/FormsControls/FormsControls";
import s from "../common/FormsControls/FormsControls.module.css";

const thisMaxLength = maxLength(25);
const Input = Element("input");

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(Input, "email", "text", "Email", [required, thisMaxLength])}
      {createField(Input, "password", "password", "Password", [
        required,
        thisMaxLength
      ])}
      {createField(Input, "rememberMe", "checkbox", null, null)} remember me
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
