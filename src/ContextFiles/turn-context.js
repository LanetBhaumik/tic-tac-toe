import React, { useState } from "react";

export const TurnContext = React.createContext({
  turn: "O",
  status: "O's Turn",
  toggleTurn: () => {},
  checkWinner: () => {},
});

const TurnContextProvider = (props) => {
  const [turn, setTurn] = useState("O");
  const [zero, setZero] = useState([]);
  const [cross, setCross] = useState([]);
  const [status, setStatus] = useState("O's Turn");

  const toggleTurn = async (e, id) => {
    toggleStatus();
    //store in appropriate array
    if (turn === "O") {
      await setZero((prevZero) => {
        return [...prevZero, id];
      });
    } else if (turn === "X") {
      await setCross((prevCross) => {
        return [...prevCross, id];
      });
    }

    e.target.value = turn;
    setTurn((prevTurn) => {
      return prevTurn === "O" ? "X" : "O";
    });
  };

  return (
    <TurnContext.Provider
      value={{
        turn: turn,
        zero,
        cross,
        toggleTurn,
        status,
        checkWinner,
        setStatus,
      }}
    >
      {props.children}
    </TurnContext.Provider>
  );
};
export default TurnContextProvider;
