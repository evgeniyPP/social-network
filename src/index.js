import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/redux-store";
import * as serviceWorker from "./serviceWorker";

const rerenderEntireTree = props => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={props} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store);
store.subscribe(() => {
  rerenderEntireTree(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
