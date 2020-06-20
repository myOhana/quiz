import React, {useState, useEffect} from 'react';
import Quiz from './Quiz';

const API_URL = "https://opentdb.com/api.php?amount=10&category=9&type=multiple";


function QuizGk() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(API_URL)
          .then((res) => res.json())
          .then((data) => {
            const questions = data.results.map((question) => ({
              ...question,
              answers: [
                question.correct_answer,
                ...question.incorrect_answers,
              ].sort(() => Math.random() - 0.5),
            }));
            setQuestions(questions);
          });
         
      }, []);

    return (
        <div>
            <Quiz questions={questions}/>
        </div>
    )
}

export default QuizGk;
