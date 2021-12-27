import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier';
import AnswersList from './AnswersList.jsx';

const QuestionEntry = ({question, answersList}) => {
  const [answers, setAnswer] = useState([]);
  const [time, setTime] = useState([]);
  const [moreAnswers, setLoadMore] = useState(false);

  useEffect(() => {
    axios.get(`qa/questions/${question.question_id}/answers`, {params: {count:2}})
     .then(res => {
       setAnswer(res.data.results);
       console.log(res.data.results);
       setTime([res.data.results[0].date.slice(0,10), res.data.results[1].date.slice(0,10)])
     })
     .catch(err => {
       console.log('This problem doesn\'t have any answers', err);
     })
  }, []);

  handleLoad()

  return(
    <div>
      <div className="individualQuestion">
        Q: {question.question_body}
      </div>

      <div><AnswersList answers={answers[0]} time={time[0]}/></div>
      <div><AnswersList answers={answers[1]} time={time[1]}/></div>
      <div>{moreAnswers ? 'Collapse answers' : 'See more answers'}</div>
      {moreAnswers ? 'show the rest of answers list' : null}

    </div>
  );
};

export default QuestionEntry;