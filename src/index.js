import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import TurnContextProvider from "./store/turn-context";

ReactDOM.render(
  <React.StrictMode>
    <TurnContextProvider>
      <App />
    </TurnContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
