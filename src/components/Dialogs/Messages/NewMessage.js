import React from "react";
import s from "./Messages.module.css";
import { reduxForm, Field } from "redux-form";
import { required, maxLength } from "../../../utils/validators";
import Element from "../../common/FormsControls/FormsControls";

const thisMaxLength = maxLength(100);
const Textarea = Element("textarea");

const NewMessage = props => {
  return (
    <form className={s.newMessage} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageText"
        placeholder="Новое сообщение"
        validate={[required, thisMaxLength]}
      />
      <button>Отправить сообщение</button>
    </form>
  );
};

export default reduxForm({
  form: "messages_new_message"
})(NewMessage);
