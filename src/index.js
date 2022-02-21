import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "../src/app/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

// import TurnContextProvider from "./store/turn-context";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();