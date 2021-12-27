import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier";
import AnswersList from "./AnswersList.jsx";
import LoadMoreAns from "./LoadMoreAns.jsx";

const QuestionEntry = ({ question, answersList }) => {
  const [answers, setAnswer] = useState([]);
  const [moreAnswers, setLoadMore] = useState(false);

  useEffect(() => {
    axios
      .get(`qa/questions/${question.question_id}/answers`)
      .then((res) => {
        setAnswer(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log("This problem doesn't have any answers", err);
      });
  }, []);

  const handleLoad = () => {
    setLoadMore(!moreAnswers);
  };

  const LoadMoreStyle = {
    textDecoration: "underline",
  };

  return (
    <div>
      <div className="individualQuestion">Q: {question.question_body}</div>

      <div>
        <AnswersList answers={answers[0]} />
      </div>
      <div>
        <AnswersList answers={answers[1]} />
      </div>

      <div onClick={handleLoad} style={LoadMoreStyle}>
        {moreAnswers ? "Collapse answers" : "See more answers"}
      </div>

      <div>
        {moreAnswers ? <LoadMoreAns answers={answers.slice(2)} /> : null}
      </div>
    </div>
  );
};

export default QuestionEntry;
