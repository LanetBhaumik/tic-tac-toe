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

  const checkWinner = (o, x) => {
    // const winner = [
    //   [11, 12, 13],
    //   [21, 22, 23],
    //   [31, 32, 33],
    //   [11, 21, 31],
    //   [21, 22, 23],
    //   [31, 32, 33],
    //   [11, 22, 33],
    //   [13, 22, 31],
    // ];
    // winner.forEach((troi) => {
    //   const zeroWin = troi.every((el) => {
    //     return o.includes(el);
    //   });
    //   const crossWin = troi.every((el) => {
    //     return x.includes(el);
    //   });
    //   if (zeroWin) {
    //     setStatus("Zero wins the Game.");
    //   } else if (crossWin) {
    //     setStatus("Cross wins the Game.");
    //   }
    // });
  };

  const toggleStatus = async () => {
    if (status === "O's Turn") {
      await setStatus("X's Turn");
    } else {
      await setStatus("O's Turn");
    }
  };

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
