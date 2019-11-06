import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"input"}
          name={"login"}
          type="text"
          placeholder={"Login"}
        />
      </div>
      <div>
        <Field
          component={"input"}
          name={"password"}
          type="text"
          placeholder={"Password"}
        />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type="checkbox" />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
