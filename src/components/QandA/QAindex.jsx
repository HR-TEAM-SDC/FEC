import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier";
import QuestionsList from "./QuestionsList.jsx";
import Search from "./Search.jsx";
import { Context } from "../context/context.js";

export default function QAapp() {
  // Declare a new state variable
  const [questions, setQuestion] = useState([]);
  const [storage, setSave] = useState([]);
  const [searchInput, setInput] = useState("");

  useEffect(() => {
    axios
      .get("qa/questions", { params: { product_id: 40344, count: 4 } })
      .then((res) => {
        setQuestion(res.data.results);
        setSave(res.data.results);
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
      setInput("");
      handleSearch();
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

  return (
    <div>
      <h2>QUESTIONS AND ANSWERS</h2>
      <div>
        <Search editSearch={editSearch} />
      </div>
      <div>
        <Context.Provider value={{ questions }}>
          <QuestionsList />
        </Context.Provider>
      </div>
    </div>
  );
}
