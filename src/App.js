import { useState } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import "./App.css";

function App() {
  const generateLetterStatuses = () => {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  };

  const letterStatus = generateLetterStatuses();
  let [allLetters, setAllLetters] = useState(letterStatus);
  let [solution, setSolution] = useState({
    word: "REACT",
    hint: "javascript library",
  });
  let [score, setScore] = useState(100);

  // const updateScore = (letter) => {

  const selectLetter = (letter) => {
    let newLetters = { ...allLetters };
    newLetters[letter] = true;
    setAllLetters(newLetters);
  };

  return (
    <div>
      <Score score={score} />
      <Solution letterStatus={allLetters} solution={solution} />
      <Letters letterStatus={allLetters} selectLetter={selectLetter} />
    </div>
  );
}

export default App;
