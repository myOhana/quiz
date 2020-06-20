import React from "react";
import { useState, useEffect } from "react";

const Timer = (props, { endGame }) => {
  const { initialMinute = 2, initialSeconds = 59 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

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

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <button
          className="ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6"
          onClick={() => endGame()}
        >
          Time Up
        </button>
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
