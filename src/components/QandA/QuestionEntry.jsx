import React, { useState, useEffect } from 'react';

const QuestionEntry = ({question}) => {
  return(
    <div>
      <div className="questionBody">
        Q: {question.question_body}
      </div>
      <div className="answerSection">
        A:
      </div>
    </div>
  );
};

export default QuestionEntry;