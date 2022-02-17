import "./App.css";
import BoxRow from "./components/BoxRow";
import React, { useContext } from "react";
import classes from "./app.module.css";

import { TurnContext } from "./store/turn-context";
const App = () => {
  const { status } = useContext(TurnContext);
  return (
    <div className="container">
      <h1 className={classes.h1}>TIC-TAC-TOE</h1>
      <p> {status} </p>
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
