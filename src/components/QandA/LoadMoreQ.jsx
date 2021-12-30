import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier";
import QuestionEntry from "./QuestionEntry.jsx";

const LoadMoreQ = ({ questions }) => {
  const handleScrollQ = {
    height: 200,
    overflow: "auto",
  };

  return (
    <div style={handleScrollQ}>
      {questions.map((question) => (
        <QuestionEntry question={question} key={question.question_id} />
      ))}
    </div>
  );
};

export default LoadMoreQ;
