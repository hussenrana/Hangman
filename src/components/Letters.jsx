import Letter from "./Letter";
import React from "react";

const Letters = (prob) => {
  let letters = "Available Letters";
  return (
    <div>
      {letters}
      <br />
      {Object.keys(prob.letterStatus).map((l) => {
        return (
          <Letter
            selectLetter={prob.selectLetter}
            letter={l}
            letterClass={prob.letterStatus[l] ? "selected-letter" : ""}
          />
        );
      })}
    </div>
  );
};

export default Letters;
