let o = ["11", "12", "13"];
let x = [11, 21, 33];

const winner = [
  ["11", "12", "13"],
  [21, 22, 23],
  [31, 32, 33],
  [11, 21, 31],
  [21, 22, 23],
  [31, 32, 33],
  [11, 22, 33],
  [13, 22, 31],
];
winner.forEach((troi) => {
  const zeroWin = troi.every((el) => {
    return o.includes(el);
  });

  const crossWin = troi.every((el) => {
    return x.includes(el);
  });

  if (zeroWin) {
    console.log("Zero wins the Game.");
  } else if (crossWin) {
    console.log("Cross wins the Game.");
  }
});
