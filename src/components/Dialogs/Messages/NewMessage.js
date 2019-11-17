import React from "react";
import { reduxForm, Field } from "redux-form";
import Element from "../../../utils/common/FormsControls";
import { required, maxLength } from "../../../utils/validators";
import css from "../../../css/Dialogs/Messages.module.css";

const thisMaxLength = maxLength(100);
const Textarea = Element("textarea");

const NewMessage = props => {
  return (
    <form className={css.newMessage} onSubmit={props.handleSubmit}>
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
