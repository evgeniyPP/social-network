import React from "react";
import { reduxForm } from "redux-form";
import Element, { createField } from "../../common/FormsControls/FormsControls";
import { required, maxLength } from "../../../utils/validators";

const thisMaxLength = maxLength(25);
const Input = Element("input");
const Textarea = Element("textarea");

const ProfileEditForm = ({ handleSubmit }) => {
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
        {createField(Input, "facebook", "text", "Your Facebook", null)}
        {createField(Input, "website", "text", "Your Website", null)}
        {createField(Input, "vk", "text", "Your VK", null)}
        {createField(Input, "twitter", "text", "Your Twitter", null)}
        {createField(Input, "instagram", "text", "Your Instagram", null)}
        {createField(Input, "youtube", "text", "Your Youtube", null)}
        {createField(Input, "github", "text", "Your Github", null)}
        {createField(Input, "mainLink", "text", "Your Main Link", null)}
        Ищете работу? {createField(Input, "lookingForAJob", "checkbox", null, null)}
        {createField(
          Textarea,
          "lookingForAJobDescription",
          "text",
          "Если ищете, опишите свои навыки",
          null
        )}
        <button>Сохранить</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "profile-edit"
})(ProfileEditForm);
