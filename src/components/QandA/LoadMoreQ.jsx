import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier';
import QuestionEntry from './QuestionEntry.jsx';
import './styles.css';

const LoadMoreQ = ({ questions }) => {
  return (
    <div className="LoadMoreQPage">
      {questions.map((question) => (
        <QuestionEntry question={question} key={question.question_id} />
      ))}
    </div>
  );
};

export default LoadMoreQ;
