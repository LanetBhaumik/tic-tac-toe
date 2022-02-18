import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turn: "O",
  status: "O's Turn",
  zero: [],
  cross: [],
};

export const turnSlice = createSlice({
  name: "turn",
  initialState,
  reducers: {
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
      if (state.zero.length === 5) {
        state.status = "Draw";
        return;
      }

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
          return state.zero.includes(el);
        });
        const crossWin = troi.every((el) => {
          return state.cross.includes(el);
        });
        if (zeroWin) {
          state.status = "Zero wins the Game.";
        }
        if (crossWin) {
          state.status = "Cross wins the Game.";
        }
      });
    },
  },
});

export const { toggleTurn, checkWinner } = turnSlice.actions;

export default turnSlice.reducer;
