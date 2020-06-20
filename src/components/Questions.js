import React from "react";

const Questions = ({
  showAnswers,
  handleNextQuestion,
  handleQuitButtonClick,
  handleAnswer,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="questions">
      <h2>Quiz Mode</h2>
      <div className="lifeline-container">
        <p>
          <span
            // onClick={handleFiftyFifty}
            className="mdi mdi-set-center mdi-24px lifeline-icon"
          >
            <span className="lifeline">fiftyFifty</span>
          </span>
        </p>
        <p>
          <span
            // onClick={handleHints}
            className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"
          >
            {" "}
            <span className="lifeline">hints</span>
          </span>{" "}
        </p>
      </div>
      <div>
        <p>
          <span className="left">1 of 10</span>
          <span className="right">
            2:30
            <span className="mdi mdi-clock-outline mdi-24px"></span>
          </span>
        </p>
      </div>
      <div className="flex flex-col mt-12">
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
                className='text-purple-600 bg-white p-4 font-semibold rounded shadow'
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
