import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../components/boxSlice";

const Reset = () => {
  const dispatch = useDispatch();
  const hadleReset = () => {
    dispatch(reset());
  };
  return (
    <center>
      <button
        style={{
          backgroundColor: "deepskyblue",
          fontSize: "xx-large",
          color: "aliceblue",
          borderRadius: "12px",
          border: "solid",
          height: "75px",
          width: "300px",
        }}
        onClick={hadleReset}
      >
        Reset
      </button>
    </center>
  );
};

export default Reset;
