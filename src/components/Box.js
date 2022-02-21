import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTurn, checkWinner, setBoxObj } from "../components/boxSlice";

import classes from "./box.module.css";

const Box = (props) => {
  // useEffect(() => {}, [boxObj[props.boxId]]);

  console.log("box rendered");
  const { boxId } = props;
  const { con, dis } = useSelector((state) => state.turn[boxId]);
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
        disabled={dis}
        value={con}
        onClick={(e) => {
          handleClick(e);
        }}
      />
    </td>
  );
};

export default memo(Box);
