import React from "react";
import { reduxForm } from "redux-form";
import Element, { createField } from "../../common/FormsControls/FormsControls";
import { required, maxLength } from "../../../utils/validators";
import s from "../../common/FormsControls/FormsControls.module.css";

const thisMaxLength = maxLength(25);
const Input = Element("input");
const Textarea = Element("textarea");

const ProfileEditForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {createField(Input, "fullName", "text", "Full Name", [
          required,
          thisMaxLength
        ])}
        {createField(Input, "aboutMe", "text", "About Me", [
          required,
          thisMaxLength
        ])}
        {createField(Input, "contacts.facebook", "text", "Your Facebook", null)}
        {createField(Input, "contacts.website", "text", "Your Website", null)}
        {createField(Input, "contacts.vk", "text", "Your VK", null)}
        {createField(Input, "contacts.twitter", "text", "Your Twitter", null)}
        {createField(
          Input,
          "contacts.instagram",
          "text",
          "Your Instagram",
          null
        )}
        {createField(Input, "contacts.youtube", "text", "Your Youtube", null)}
        {createField(Input, "contacts.github", "text", "Your Github", null)}
        Ищете работу?
        {createField(Input, "lookingForAJob", "checkbox", null, null)}
        {createField(
          Textarea,
          "lookingForAJobDescription",
          "text",
          "Если ищете, опишите свои навыки",
          null
        )}
        <button>Сохранить</button>
        {error && <div className={s.formSummaryError}>{error}</div>}
      </div>
    </form>
  );
};

export default reduxForm({
  form: "profile-edit"
})(ProfileEditForm);
