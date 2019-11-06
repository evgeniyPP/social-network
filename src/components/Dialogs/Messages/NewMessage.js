import React from "react";
import s from "./Messages.module.css";
import { reduxForm, Field } from "redux-form";

const NewMessage = props => {
  return (
    <form className={s.newMessage} onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name="newMessageText"
        placeholder="Новое сообщение"
      />
      <button>Отправить сообщение</button>
    </form>
  );
};

export default reduxForm({
  form: "messages_new_message"
})(NewMessage);
