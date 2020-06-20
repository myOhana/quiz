import React, { Fragment, useState } from "react";
import Questions from "../components/Questions";
import {Helmet} from 'react-helmet';
import { useHistory } from "react-router-dom";
// import QuizSummary from "../components/quiz/QuizSummary";

// const API_URL = "https://opentdb.com/api.php?amount=10&category=9&type=multiple";

// const API_URL_MATH =
//   "https://opentdb.com/api.php?amount=19&category=19&type=multiple";

function Quiz({ questions}) {
//   const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  let history = useHistory();

//   On answering
  const handleAnswer = (answer) => {
    // prevents double answers
    if (!showAnswers) {
      // increases score if correct answer
      if (answer === questions[currentIndex].correct_answer) {
        const newScore = score + 1;
        setScore(newScore);
      }
    }
    setShowAnswers(true);
  };

//   Next Question
  const handleNextQuestion = () => {
    //   increments index of question
    setShowAnswers(false);

    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
  };

//   Quit game
  const handleQuitButtonClick = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      history.push('/');
    }
  }

  return questions.length > 0 ? (
    <Fragment>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl text-purple font-bold">
          Game Ended! Your score is {score}.{" "}
          </h1>
      ) : (
        <Questions
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleQuitButtonClick={handleQuitButtonClick}
          currentIndex={currentIndex}
          questions={questions}
        />
      )}
    </Fragment>
  ) : (
    <h2 className="text-2xl text-purple-700 font-bold center">Loading....</h2>
  );
}

export default Quiz;
