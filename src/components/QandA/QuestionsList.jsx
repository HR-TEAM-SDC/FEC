import React, { useState, useEffect, useContext } from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import { Context } from '../context/context.js';

const QuestionsList = ({ questions }) => {
  // const { questions } = useContext(Context);

  return (
    <div className="accordion">
      {questions.map((question) => (
        <QuestionEntry key={question.question_id} question={question} />
      ))}
    </div>
  );
};

export default QuestionsList;
