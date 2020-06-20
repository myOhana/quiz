import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Home from './components/Home';
import ChooseCategories from './components/quiz/ChooseCategory';
import Quiz from './pages/Quiz';
import QuizSummary from './components/quiz/QuizSummary'

function App() {
  return (
    <Router>
    <Route path='/' exact component={Home} />
    <Route path='/categories' exact component={ChooseCategories} />
    <Route path='/quiz' exact component={Quiz} />
    <Route  path='/summary' exact component={QuizSummary}/>
    </Router>
  );
}

export default App;
