import React from "react";

const Letter = (prob) => {
  const changeLetterStatus = () => {
    prob.selectLetter(prob.letter);
  };
  return (
    <span onClick={changeLetterStatus} className={prob.letterClass}>
      {prob.letter}{" "}
    </span>
  );
};

export default Letter;
