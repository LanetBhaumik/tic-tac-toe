import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTurn, checkWinner } from "../components/boxSlice";

import classes from "./box.module.css";

const Box = (props) => {
  const turn = useSelector((state) => state.turn.turn);
  const status = useSelector((state) => state.turn.status);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(toggleTurn(props.boxId));
    dispatch(checkWinner());

    e.target.disabled = true;
    e.target.value = turn;
  };

  return (
    <td>
      <input
        className={classes.box}
        type="button"
        disabled={
          status === "Zero wins the Game." || status === "Cross wins the Game."
        }
        onClick={(e) => {
          handleClick(e);
        }}
      />
    </td>
  );
};

export default Box;
