import React, { Fragment, useState } from "react";
import Questions from "../components/Questions";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
// import QuizSummary from "../components/quiz/QuizSummary";

// const API_URL = "https://opentdb.com/api.php?amount=10&category=9&type=multiple";

// const API_URL_MATH =
//   "https://opentdb.com/api.php?amount=19&category=19&type=multiple";

function Quiz({ questions }) {
  //   const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
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
      }else{
          const moreWrong = wrongAnswers + 1;
          setWrongAnswers(moreWrong);
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
      history.push("/");
    }
  };

  //   End of Game due to time over or all questions answered
  const endGame = () => {
    alert("Quiz has ended");
    const playerStats = {
      score: score,
      numberOfQuestions: currentIndex,
      numberOfAnsweredQuestions: score + wrongAnswers,
      correctAnswers: score,
      wrongAnswers: wrongAnswers,
    };
    // return <QuizSummary playerStats={} />;
    setTimeout(() => {
      history.push("/summary", playerStats);
    }, 1000);
  };

  return questions.length > 0 ? (
    <Fragment>
      <Helmet>
        <title>Quiz Page</title>
      </Helmet>
      {currentIndex >= questions.length ? (
        endGame()
      ) : (
        <Questions
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleQuitButtonClick={handleQuitButtonClick}
          currentIndex={currentIndex}
          questions={questions}
          endGame={endGame}
          score={score}
        />
      )}
    </Fragment>
  ) : (
    <h2 className="text-2xl text-purple-700 font-bold center">Loading....</h2>
  );
}

export default Quiz;
