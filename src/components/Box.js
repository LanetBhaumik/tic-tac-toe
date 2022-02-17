import React, { useContext, useEffect } from "react";
import classes from "./box.module.css";

import { TurnContext } from "../store/turn-context";

const Box = (props) => {
  const { toggleTurn, zero, cross, setStatus } = useContext(TurnContext);
  const handleClick = (e) => {
    toggleTurn(e, props.boxId);
    win(zero, cross);
    e.target.disabled = true;
  };

  const win = (zero, cross) => {
    console.log(zero, cross);
    const winner = [
      ["11", "12", "13"],
      ["21", "22", "23"],
      ["31", "32", "33"],
      ["11", "21", "31"],
      ["21", "22", "23"],
      ["31", "32", "33"],
      ["11", "22", "33"],
      ["13", "22", "31"],
    ];
    winner.forEach((troi) => {
      const zeroWin = troi.every((el) => {
        return zero.includes(el);
      });

      const crossWin = troi.every((el) => {
        return cross.includes(el);
      });

      if (zeroWin) {
        setStatus("Zero wins the Game.");
      }
      if (crossWin) {
        setStatus("Cross wins the Game.");
      }
    });
  };
  useEffect(() => {}, []);
  return (
    <td>
      <input
        className={classes.box}
        type="button"
        onClick={(e) => {
          handleClick(e);
        }}
      />
    </td>
  );
};

export default Box;
