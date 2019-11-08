import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLength } from "../../utils/validators";
import Element from "../common/FormsControls/FormsControls";

const thisMaxLength = maxLength(25);
const Input = Element("input");

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name={"login"}
          type="text"
          placeholder={"Login"}
          validate={[required, thisMaxLength]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"password"}
          type="text"
          placeholder={"Password"}
          validate={[required, thisMaxLength]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type="checkbox" /> remember
        me
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
