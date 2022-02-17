export const TOGGLE_TURN = "TOGGLE_TURN";
export const toggleTurn = (curTurn) => {
  return {
    type: TOGGLE_TURN,
    turn: curTurn,
  };
};
