import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";

import "./api/server";

const unsubscribe = store.subscribe(() => console.log(store.getState()));

console.log("dispatching action");
store.dispatch({ type: "todo/todoAdded", payload: "Here is a new todo item" });
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
