import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier";
import AnswersList from "./AnswersList.jsx";

const QuestionEntry = ({ question, answersList }) => {
  const [answers, addAnswer] = useState([{}, {}]); //?? question here
  const [time, setTime] = useState([]);

  useEffect(() => {
    axios
      .get(`qa/questions/${question.question_id}/answers`, {
        params: { count: 2 },
      })
      .then((res) => {
        addAnswer(res.data.results);
        console.log(res.data.results);
        setTime([
          res.data.results[0].date.slice(0, 10),
          res.data.results[1].date.slice(0, 10),
        ]);
      })
      .catch((err) => {
        console.log("Answer Error", err);
      });
  }, []);

  return (
    <div>
      <div className="individualQuestion">Q: {question.question_body}</div>

      <div>
        <AnswersList answers={answers[0]} time={time[0]} />
      </div>
      <div>
        <AnswersList answers={answers[1]} time={time[1]} />
      </div>

      {/* <div className="individualAnswer">
        <div>A: {answers[0].body}</div>
        <div>
          by: {answers[0].answerer_name} {time[0]} | Helpful? ({answers[0].helpfulness})
          | <span onClick={()=> setReport(!report)} style={style}>
              {report ? 'Reported' : 'Report'}
            </span>
        </div>
      </div>
      <div className="individualAnswer">
        <div>A: {answers[1].body}</div>
        <div>
          by: {answers[1].answerer_name} {time[1]} | Helpful? ({answers[1].helpfulness})
          | <span onClick={()=> setReport(!report) } style={style}>{report ? 'Reported' : 'Report'}</span>
        </div>
      </div> */}
    </div>
  );
};

export default QuestionEntry;
