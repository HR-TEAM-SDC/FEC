import React, { useState, useEffect, useContext } from "react";
import axios from "../../apis/atelier";
import { Context } from "../context/context.js";

const AnswersList = ({ answers }) => {
  const [reportStatus, setReport] = useState(false);
  const [helpfulStatus, setHelpful] = useState(false);
  const { handleHelpfulness } = useContext(Context);

  var date;
  if (answers) {
    date = answers.date.slice(0, 10);
  } else {
    date = "";
  }

  var reportStyle = {
    textDecoration: "underline",
    color: reportStatus ? "grey" : "black",
  };

  var helpfulStyle = {
    textDecoration: "underline",
    color: helpfulStatus ? "orange" : "black",
  };

  const handleHelp = () => {
    if (helpfulStatus === true) {
      console.log("Don't submit multiple counts of helpfulness.");
      return;
    } else {
      setHelpful(!helpfulStatus);
      handleHelpfulness(answers.answer_id);
    }
  };

  const handleReport = () => {
    if (reportStatus === true) {
      console.log("Don't submit multiple reports");
      return;
    } else {
      setReport(!reportStatus);

      axios
        .put(`qa/answers/${answers.answer_id}/report`)
        .then((res) => {
          console.log("Your report has been submitted!");
        })
        .catch((err) => {
          console.log("Failed to submit a report: ", err);
        });
    }
  };

  return (
    <div className="individualAnswer">
      <div>
        A: {answers ? answers.body : "This problem has no answers yet."}
        <div>
          {answers
            ? answers.photos.map((photo) => (
                <img src={photo.url} width="100" height="100" key={photo.id} />
              ))
            : null}{" "}
        </div>
      </div>
      <div>
        by: {answers ? answers.answerer_name : null} {date} | Helpful?
        <span
          style={helpfulStyle}
          onClick={() => {
            handleHelp();
          }}
        >
          {" "}
          {answers ? "Yes" : null}{" "}
        </span>
        ({answers ? answers.helpfulness : null}) |{" "}
        <span
          onClick={() => {
            handleReport();
          }}
          style={reportStyle}
        >
          {answers ? (reportStatus ? "Reported" : "Report") : null}
        </span>
      </div>
    </div>
  );
};

export default AnswersList;
