import React from "react";
import Timer from "./Timer";

const Questions = ({
  score,
  showAnswers,
  handleNextQuestion,
  currentIndex,
  handleQuitButtonClick,
  questions,
  endGame,
  handleAnswer,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="questions">
      <h2>Quiz Mode</h2>
      <div>
        <div className="lifeline-container center p-5">
          <span className="left lifeline lifeline-icon mt-3">
            {currentIndex + 1} of {questions.length}
          </span>
          <span className="right lifeline lifeline-icon flex">
            <Timer endGame={endGame} score={score} />{" "}
            <span className="mdi mdi-clock-outline mdi-24px"></span>
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-6 center">
        <div className="bg-white text-purple-800 p-3 rounded shadow-md">
          <h5
            className="text-2xl"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          {answers.map((answer) => {
            // const textColor = showAnswers
            //   ? answer === correct_answer
            //     ? "text-green-500 bg-white"
            //     : "text-red-500 bg-white"
            //   : "text-purple-700 bg-white";
            return (
              <button
                className="text-purple-600 bg-white p-4 font-semibold rounded shadow"
                onClick={() => handleAnswer(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>
        <div className="button-container mt-2">
          {showAnswers && (
            <button
              onClick={handleNextQuestion}
              className="bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6"
            >
              Next Question
            </button>
          )}
          <button
            id="quit-button"
            className="ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6"
            onClick={handleQuitButtonClick}
          >
            Quit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
