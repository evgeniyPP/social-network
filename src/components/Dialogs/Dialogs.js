import React from "react";
import Username from "./Username/Username";
import s from "./Dialogs.module.css";
import MessagesContainer from "./Messages/MessagesContainer";
import StoreContext from "../../StoreContext";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <StoreContext.Consumer>
        {
          (store) => {
            return (<Username className={s.left} users={store.getState().dialogsPage.usersDB} />)
          }
        }
      </StoreContext.Consumer>
      <div className={s.right}>
        <MessagesContainer />
      </div>
    </div>
  );
};

export default Dialogs;
