import React from "react";
import Box from "./Box";

const BoxRow = (props) => {
  const content = [];
  for (let i = 1; i <= 3; i++) {
    content.push(<Box key={i} boxId={props.rowId + i} />);
  }
  return (
    <>
      <tr>{content}</tr>
    </>
  );
};

export default BoxRow;
