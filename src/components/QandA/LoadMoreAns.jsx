import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier";
import AnswersList from "./AnswersList.jsx";

const LoadMoreAns = ({ answers }) => {
  const handleScroll = {
    height: 150,
    overflow: "auto",
    border: "solid",
    borderColor: "black",
    borderWidth: 1,
  };

  const answerStyle = {
    border: "solid",
    borderColor: `#d3d3d3`,
    borderWidth: 1,
  };

  return (
    <div style={handleScroll}>
      {answers.map((answers) => (
        <div style={answerStyle} key={answers.answer_id}>
          <AnswersList answers={answers} />
        </div>
      ))}
    </div>
  );
};

export default LoadMoreAns;
