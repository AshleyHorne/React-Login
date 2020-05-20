import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

import App from "./App";
import Post from "./Post";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <header>
      <Navbar/>
    </header>
    <App />
    <Post/>
  </React.StrictMode>,
  rootElement
);
