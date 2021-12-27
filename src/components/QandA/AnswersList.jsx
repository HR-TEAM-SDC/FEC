import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier';

const AnswersList = ({answers, time}) => {

  const [reportStatus, setReport] = useState(false);

  var style = {
    textDecoration: 'underline',
    color: reportStatus ? 'grey' : 'black'
  };

  // var reportText = {
  //   color: reportStatus ? 'black' : 'grey'
  // };


  const handleReport = () => {
    if(reportStatus === true) {
      console.log('Don\'t submit multiple reports');
      return;
    } else {

    setReport(!reportStatus);

    axios.put(`qa/answers/${answers.answer_id}/report`)
      .then(res => {
        console.log('Your report has been submitted!');
      })
      .catch(err => {
        console.log('Failed to submit a report: ', err);
      })
    }
  };


  return(
    <div className="individualAnswer">
    <div>A: {answers.body}</div>
    <div>
      by: {answers.answerer_name} {time} | Helpful? ({answers.helpfulness})
      | <span onClick={()=> {handleReport();} } style={style}>
          {reportStatus ? 'Reported' : 'Report'}
        </span>
    </div>
  </div>
  );
}

export default AnswersList;