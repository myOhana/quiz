import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Quiz from './Quiz';

function Categories() {
    return (
      <>
      <Fragment>
      <Helmet>
      <title>Quiz App - Categories</title>
    </Helmet>
    <div className='main'>
    <div className='container'>
    <h1 className='text-purple-900'>Choose Your Catetory</h1>
     <div className="mt-6">
        <Link className="boxes ml-auto bg-white text-purple-800 p-10 font-semibold rounded shadow mt-6" to='/quiz/gk'> 
          General Knowledge
        </Link>
        <Link className="boxes ml-auto bg-white text-purple-800 p-10 font-semibold rounded shadow mt-6" to='/quiz/math'>
          Mathematics
        </Link>
        <Link className="boxes ml-auto bg-white text-purple-800 p-10 font-semibold rounded shadow mt-6" to='/quiz/books'>
          Books
        </Link>
        <Link className="boxes ml-auto bg-white text-purple-800 p-10 font-semibold rounded shadow mt-6" to='/quiz/music'>
          Music
        </Link>
        </div>
        </div>
        </div>
        </Fragment>
        
        </>
    )
}

export default Categories;