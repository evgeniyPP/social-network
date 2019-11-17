import React from "react";
import { Field } from "redux-form";
import css from "../../css/common/FormsControls.module.css";

const Element = Element => ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={css.formControl + " " + (hasError ? css.error : "")}>
      <Element {...input} {...props} />
      <br />
      {hasError && <span>{error}</span>}
    </div>
  );
};

export default Element;

export const createField = (component, name, type, placeholder, validate) => {
  return (
    <div>
      <Field
        component={component}
        name={name}
        type={type}
        placeholder={placeholder}
        validate={validate}
      />
    </div>
  );
};
