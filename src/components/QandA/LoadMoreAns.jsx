import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier';
import AnswersList from './AnswersList.jsx';

const LoadMoreAns = ({ answers }) => {
  return (
    <div className="LoadMoreAnsPage">
      {answers.map((answers) => (
        <div key={answers.answer_id}>
          <AnswersList answers={answers} />
        </div>
      ))}
    </div>
  );
};

export default LoadMoreAns;
