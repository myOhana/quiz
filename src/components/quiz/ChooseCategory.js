import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Quiz from './Quiz';

function ChooseCategories() {
    return (
      <div className='main'>
      <Fragment>
      <Helmet>
      <title>Quiz App - Categories</title>
    </Helmet>
     <div className="container grid grid-cols-2 gap-6 mt-6">
  
        <Link category='General Knowledge' className="ml-auto bg-white text-purple-800 p-10 font-semibold rounded shadow mt-6" to='/quiz/gk'> 
          General Knowledge
        </Link>
        <Link category='Science : Mathematics' className="ml-auto bg-white text-purple-800 p-10 font-semibold rounded shadow mt-6" to='/quiz/math'>
          Mathematics
        </Link>
        </div>

        </Fragment>
        </div>
    )
}

export default ChooseCategories;