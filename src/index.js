import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./common/reset.css";
import "./common/fonts/iconfont.css";
import { Provider } from "react-redux";
import Store from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
