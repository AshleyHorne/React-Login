import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Post from "./Post";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Post/>
  </React.StrictMode>,
  rootElement
);
