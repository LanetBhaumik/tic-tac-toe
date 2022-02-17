import { TOGGLE_TURN } from "../actions/action";

const initialState = {
  turn: "O",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TURN:
      return {
        turn: (state.turn = state.turn === "O" ? "X" : "O"),
      };
    default:
      return state;
  }
};

export default reducer;
