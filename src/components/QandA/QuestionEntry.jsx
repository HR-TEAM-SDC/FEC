import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier";
import AnswersList from "./AnswersList.jsx";
import LoadMoreAns from "./LoadMoreAns.jsx";

const QuestionEntry = ({ question, answersList }) => {
  const [answers, setAnswer] = useState([]);
  const [moreAnswers, setLoadMore] = useState(false);
  const [helpQuesStatus, setHelpQues] = useState(false);

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

  const handleHelpQues = () => {
    if (helpQuesStatus === true) {
      console.log("Don't submit multiple counts of helpfulness.");
      return;
    } else {
      setHelpQues(!helpQuesStatus);
      axios
        .put(`qa/questions/${question.question_id}/helpful`)
        .then((res) => {
          console.log("Your successfuly mark a question helpful!");
        })
        .catch((err) => {
          console.log("Failed to mark a question", err);
        });
    }
  };

  const LoadMoreStyle = {
    textDecoration: "underline",
  };

  const questionStyle = {
    border: "solid",
    borderColor: `#dcdcdc`,
    borderWidth: 1,
  };

  const helpfulStyle = {
    float: "right",
  };

  const helpLinkStyle = {
    textDecoration: "underline",
    color: helpQuesStatus ? "orange" : "black",
  };

  const addAnswerStyle = {
    textDecoration: "underline",
  };

  return (
    <div style={questionStyle}>
      <div className="individualQuestion">
        Q: {question.question_body}{" "}
        <span style={helpfulStyle}>
          Helpful?{" "}
          <span
            style={helpLinkStyle}
            onClick={() => {
              handleHelpQues();
            }}
          >
            Yes
          </span>{" "}
          ({question.question_helpfulness}) |{" "}
          <span style={addAnswerStyle}>Add Answer</span>
        </span>
      </div>

      <div style={questionStyle}>
        <AnswersList answers={answers[0]} />
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
