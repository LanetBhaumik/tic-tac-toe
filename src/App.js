import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Box from "./components/Box";
import Reset from "./components/Reset";
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
          <tr>
            <Box boxId="11" />
            <Box boxId="12" />
            <Box boxId="13" />
          </tr>
          <tr>
            <Box boxId="21" />
            <Box boxId="22" />
            <Box boxId="23" />
          </tr>
          <tr>
            <Box boxId="31" />
            <Box boxId="32" />
            <Box boxId="33" />
          </tr>
        </tbody>
      </table>
      <Reset />
    </div>
  );
};

export default App;
