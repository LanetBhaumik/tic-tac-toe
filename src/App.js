import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import BoxRow from "./components/BoxRow";
import classes from "./app.module.css";

// import { TurnContext } from "./store/turn-context";
const App = () => {
  return (
    <div className="container">
      <h1 className={classes.h1}>TIC-TAC-TOE</h1>
      <p> {useSelector((state) => state.turn.status)} </p>
      <table className={classes.table}>
        <tbody>
          <BoxRow rowId="1" />
          <BoxRow rowId="2" />
          <BoxRow rowId="3" />
        </tbody>
      </table>
    </div>
  );
};

export default App;
