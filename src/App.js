import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import BoxRow from "./components/BoxRow";
import Reset from "./components/Reset";

// import { TurnContext } from "./store/turn-context";
const App = () => {
  return (
    <div className="containter">
      <h1
        className="h1"
        style={{
          color: "deepskyblue",
        }}
      >
        TIC-TAC-TOE
      </h1>
      <p
        style={{
          color: "white",
          fontSize: "30px",
          background: "deepskyblue",
        }}
      >
        {useSelector((state) => state.turn.status)}{" "}
      </p>
      <table className="table">
        <tbody>
          <BoxRow rowId="1" />
          <BoxRow rowId="2" />
          <BoxRow rowId="3" />
        </tbody>
      </table>
      <Reset />
    </div>
  );
};

export default App;
