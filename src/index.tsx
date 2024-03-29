import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css';
import "./sass/index.scss";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById("root"));
