import React from "react";
import Letter from "./Letter";

const Solution = (prob) => {
  let lettersArray = prob.solution.word.split("");
  return (
    <div>
      {lettersArray.map((l) => {
        return prob.letterStatus[l] === true ? (
          <Letter key={l} letter={l} />
        ) : (
          <Letter key={l} letter="_" />
        );
      })}
      <br /> {prob.solution.hint}
    </div>
  );
};

export default Solution;
