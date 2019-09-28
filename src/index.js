import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from './state';
import { addPost } from './state';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
