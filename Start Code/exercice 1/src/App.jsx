import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score / 10) * 100}%`;

    // 2- Compute color (optional)
    let scoreColor = "#ef4444";

    if (score >= 7) {
      scoreColor = "#22c55e";
    } else if (score >= 4) {
      scoreColor = "#f3bc47";
    }


    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type="number"
          min="0"
          max="10"
          value={score}
          onChange={(event) => {
            const inputScore = Number(event.target.value);
            const clampedScore = Math.max(0, Math.min(10, inputScore || 0));
            setScore(clampedScore);
          }}
        ></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
