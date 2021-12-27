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

  return (
    <div style={handleScroll}>
      {answers.map((answers) => (
        <AnswersList key={answers.answer_id} answers={answers} />
      ))}
    </div>
  );
};

export default LoadMoreAns;
