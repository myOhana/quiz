import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Home from './components/Home';
import ChooseCategory from './components/quiz/ChooseCategory';
// import Quiz from './pages/Quiz';
import QuizGk from './pages/QuizGk';
import QuizMath from './pages/QuizMath';
import QuizSummary from './components/quiz/QuizSummary'

function App() {
  return (
    <Router>
    <Route path='/' exact component={Home} />
    <Route path='/categories' exact component={ChooseCategory} />
   {/* <Route path='/quiz' exact component={Quiz} />*/}
    <Route path='/quiz/gk' exact component={QuizGk} />
    <Route path='/quiz/math' exact component={QuizMath} />
    <Route  path='/summary' exact component={QuizSummary}/>
    </Router>
  );
}

export default App;
