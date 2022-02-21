import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTurn, checkWinner, setBoxObj } from "../components/boxSlice";

import classes from "./box.module.css";

const Box = (props) => {
  const { boxObj } = useSelector((state) => state.turn);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log("Button clicked!!!");
    dispatch(setBoxObj(props.boxId));
    dispatch(toggleTurn(props.boxId));
    dispatch(checkWinner());
  };

  return (
    <td>
      <input
        className={classes.box}
        type="button"
        disabled={boxObj[props.boxId].dis}
        value={boxObj[props.boxId].con}
        onClick={(e) => {
          handleClick(e);
        }}
      />
    </td>
  );
};

export default Box;
