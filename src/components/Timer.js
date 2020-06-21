import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Timer = ({ score, currentIndex, wrongAnswers }) => {
  // const { initialMinute = 0, initialSeconds = 5 } = props;
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const endGame = () => {
    alert("Quiz has ended. Time Over");
    const playerStats = {
      score: score,
      numberOfQuestions: currentIndex,
      numberOfAnsweredQuestions: score + wrongAnswers,
      correctAnswers: score,
      wrongAnswers: wrongAnswers,
    };
    // return <QuizSummary playerStats={} />;
    setTimeout(() => {
      console.log("this is set timeout of time over");
      history.push("/summary", playerStats);
    }, 3000);
    console.log("Clicked on time over");
  };

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        endGame()
      ) : (
        <p className="mt-2">
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
    </div>
  );
};

export default Timer;
