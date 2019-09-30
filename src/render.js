import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = props => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={props}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
