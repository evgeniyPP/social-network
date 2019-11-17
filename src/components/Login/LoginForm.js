import React from "react";
import { reduxForm } from "redux-form";
import { required, maxLength } from "../../utils/validators";
import Element, { createField } from "../common/FormsControls/FormsControls";
import s from "../common/FormsControls/FormsControls.module.css";

const thisMaxLength = maxLength(25);
const Input = Element("input");

const LoginForm = ({ handleSubmit, error, captcha }) => {
  return (
    <form className={s.loginForm} onSubmit={handleSubmit}>
      {createField(Input, "email", "text", "Email", [required, thisMaxLength])}
      {createField(Input, "password", "password", "Password", [
        required,
        thisMaxLength
      ])}
      {createField(Input, "rememberMe", "checkbox", null, null)} remember me
      {error && <div className={s.formSummaryError}>{error}</div>}
      {captcha ? <img className={s.captcha} src={captcha} alt="" /> : ""}
      {captcha
        ? createField(Input, "captcha", "text", "Введите каптчу", [required])
        : ""}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
