import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turn: "O",
  status: "O's Turn",
  zero: [],
  cross: [],
  boxObj: {
    11: {
      con: "",
      dis: false,
    },
    12: {
      con: "",
      dis: false,
    },
    13: {
      con: "",
      dis: false,
    },
    21: {
      con: "",
      dis: false,
    },
    22: {
      con: "",
      dis: false,
    },
    23: {
      con: "",
      dis: false,
    },
    31: {
      con: "",
      dis: false,
    },
    32: {
      con: "",
      dis: false,
    },
    33: {
      con: "",
      dis: false,
    },
  },
};

export const turnSlice = createSlice({
  name: "turn",
  initialState,
  reducers: {
    setBoxObj: (state, action) => {
      const id = action.payload;
      state.boxObj[id].con = state.turn;
      state.boxObj[id].dis = true;
    },
    reset: (state) => {
      const keys = Object.keys(initialState);
      keys.forEach((key) => {
        state[key] = initialState[key];
      });
    },
    toggleTurn: (state, action) => {
      if (state.status === "O's Turn") {
        state.status = "X's Turn";
      } else {
        state.status = "O's Turn";
      }
      if (state.turn === "O") {
        state.zero = state.zero.concat(action.payload);
      }
      if (state.turn === "X") {
        state.cross = state.cross.concat(action.payload);
      }
      state.turn = state.turn === "O" ? "X" : "O";
    },

    checkWinner: (state) => {
      const winner = [
        ["11", "12", "13"],
        ["21", "22", "23"],
        ["31", "32", "33"],
        ["11", "21", "31"],
        ["12", "22", "32"],
        ["13", "23", "33"],
        ["11", "22", "33"],
        ["13", "22", "31"],
      ];
      winner.forEach((troi) => {
        const zeroWin = troi.every((el) => {
          return state.zero.includes(el);
        });
        const crossWin = troi.every((el) => {
          return state.cross.includes(el);
        });
        if (zeroWin) {
          state.status = "Zero wins the Game.";
          const keys = Object.keys(state.boxObj);
          keys.forEach((key) => {
            state.boxObj[key].dis = true;
          });
          return;
        } else if (crossWin) {
          state.status = "Cross wins the Game.";
          const keys = Object.keys(state.boxObj);
          keys.forEach((key) => {
            state.boxObj[key].dis = true;
          });
          return;
        }
      });
      if (
        state.status !== "Zero wins the Game." &&
        state.status !== "Zero wins the Game." &&
        state.zero.length === 5
      ) {
        state.status = "Draw";
        return;
      }
    },
  },
});

export const { toggleTurn, checkWinner, reset, setBoxObj } = turnSlice.actions;

export default turnSlice.reducer;
