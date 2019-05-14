import React from "react";

const LineBreakText = props => {
  const splitText = props.text.split("\n");
  return splitText.map((item, i) => {
    return (
      <span key={i}>
        {item}
        {i !== splitText.length - 1 && <br />}
      </span>
    );
  });
};

export default LineBreakText;
