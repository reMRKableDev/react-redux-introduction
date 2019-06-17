import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* 
    Import Redux Provider and store in order to use with App.

    The Provider is a custom redux component that connects to 
    our redux state and allows everything within our component tree to get accessed.

    store holds the state of the application.
*/
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
