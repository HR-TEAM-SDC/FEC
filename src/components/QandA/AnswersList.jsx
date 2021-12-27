import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier';

const AnswersList = ({answers, time}) => {

  const [reportStatus, setReport] = useState(false);
  const [helpfulStatus, setHelpful] = useState(false);

  var reportStyle = {
    textDecoration: 'underline',
    color: reportStatus ? 'grey' : 'black'
  };

  var helpfulStyle = {
    textDecoration: 'underline',
    color: helpfulStatus ? 'orange' : 'black'
  }

  const handleHelp = () => {
    if (helpfulStatus === true) {
      console.log('Don\'t submit multiple counts of helpness.')
      return;
    } else {
      setHelpful(!helpfulStatus);

      axios.put(`qa/answers/${answers.answer_id}/helpful`)
        .then(res => {
          console.log('Your feedback has been submitted!');
        })
        .catch( err => {
          console.log('Failed to submit a feedback: ', err);
        })
    }
  };

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
    <div>A: {answers ? answers.body : 'This problem has no answers yet.'}</div>
    <div>
      by: {answers ? answers.answerer_name : null} {time} | Helpful?
      <span style={helpfulStyle} onClick={()=>{handleHelp();}}> {answers ? 'Yes': null} </span>
      ({answers ? answers.helpfulness: null})
      | <span onClick={()=> {handleReport();} } style={reportStyle} >
      {answers ? (reportStatus ? 'Reported' : 'Report'): null}
        </span>
    </div>
  </div>
  );
}

export default AnswersList;