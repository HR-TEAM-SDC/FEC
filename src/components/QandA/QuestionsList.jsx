import React, { useState, useEffect, useContext } from "react";
import QuestionEntry from "./QuestionEntry.jsx";
import { Context } from "../context/context.js";

const QuestionsList = () => {
  const { questions } = useContext(Context);

  return (
    <div>
      {/* <h1>This is a Question List</h1> */}
      {questions.map((question) => (
        <QuestionEntry key={question.question_id} question={question} />
      ))}
    </div>
  );
};

export default QuestionsList;
