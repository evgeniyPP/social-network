import React from "react";
import s from "./FormsControls.module.css";

const Element = element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      {React.createElement(element, { ...input, ...props })}
      <br />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export default Element;
