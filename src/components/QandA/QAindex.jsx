import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier";
import QuestionsList from "./QuestionsList.jsx";
import Search from "./Search.jsx";
import LoadMoreQ from "./LoadMoreQ.jsx";
import { Context } from "../context/context.js";
const productId = 40344;

export default function QAapp() {
  // Declare a new state variable
  const [questions, setQuestion] = useState([]);
  const [storage, setSave] = useState([]);
  const [searchInput, setInput] = useState("");
  const [moreQ, setLoadQ] = useState(false);
  const [QuesArrayLength, setLength] = useState(0);
  const [counter, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("qa/questions", { params: { product_id: productId, count: 4 } })
      .then((res) => {
        setQuestion(res.data.results);
        setSave(res.data.results);
        setLength(res.data.results.length);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Failed to get data,", err);
      });
  }, []);

  const editSearch = (query) => {
    if (query.target.value.length >= 3) {
      console.log("Detecting input changing");
      setInput(query.target.value);
      handleSearch();
    } else {
      console.log("returning to non-filter state");
      setQuestion(storage);
    }
  };

  const handleSearch = () => {
    console.log("Searching!");
    let newList = storage.filter((question) => {
      return question.question_body
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setQuestion(newList);
  };

  const handleHelpfulness = (answerId) => {
    axios
      .put(`qa/answers/${answerId}/helpful`)
      .then(() => {
        console.log("Your feedback has been submitted!");
        return axios.get("qa/questions", { params: { product_id: productId } });
      })
      .then((res) => {
        setQuestion(res.data.results);
        setSave(res.data.results);
        setLength(res.data.results.length);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Failed to submit a feedback: ", err);
      });
  };

  const handleLoadMoreQ = () => {
    if (moreQ === false) {
      setLoadQ(!moreQ);
    }
    setCount(counter + 2);
  };

  const buttonStyle = {
    height: 70,
    width: 400,
  };

  return (
    <div>
      <h2>QUESTIONS AND ANSWERS</h2>
      <div>
        <Search editSearch={editSearch} />
      </div>
      <div>
        <Context.Provider value={{ handleHelpfulness }}>
          <QuestionsList questions={questions.slice(0, 2)} />
        </Context.Provider>
      </div>
      <div>
        {questions.length > 2 ? (
          counter >= QuesArrayLength - 2 ? null : (
            <button style={buttonStyle} onClick={handleLoadMoreQ}>
              MORE ANSWERED QUESTIONS
            </button>
          )
        ) : null}
      </div>
      <div>
        {moreQ ? <LoadMoreQ questions={questions.slice(2, 2 + 2)} /> : null}
      </div>
    </div>
  );
}
