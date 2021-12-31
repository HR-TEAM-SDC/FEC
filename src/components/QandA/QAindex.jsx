import React, { useState, useEffect, useRef } from "react";
import axios from "../../apis/atelier";
import QuestionsList from "./QuestionsList.jsx";
import Search from "./Search.jsx";
import LoadMoreQ from "./LoadMoreQ.jsx";
import AddModal from "./AddModals.jsx";
import AddQuestionForm from "./AddQuestionForm.jsx";
import AddAnswerForm from "./AddAnswerForm.jsx";
import { Context } from "../context/context.js";
import "./styles.css";
const productId = 40347;

//Note for Api
//On the main page App.js, QA section needs  .get("qa/questions"
//and .get(`products/${productId}`)

export default function QAapp() {
  // Declare a new state variable
  const [questions, setQuestion] = useState([]);
  const [storage, setSave] = useState([]);
  const [searchInput, setInput] = useState("");
  const [moreQ, setLoadQ] = useState(false);
  const [QuesArrayLength, setLength] = useState(0);
  const [counter, setCount] = useState(0);
  const [product, setProduct] = useState(0);
  const modal = useRef(null);

  useEffect(() => {
    axios
      .get("qa/questions", { params: { product_id: productId } })
      .then((res) => {
        setQuestion(res.data.results);
        setSave(res.data.results);
        setLength(res.data.results.length);
        console.log(res.data);
      })
      .then(() => {
        return axios.get(`products/${productId}`);
      })
      .then((res) => {
        setProduct(res.data);
        console.log("Product data: ", res.data);
      })
      .catch((err) => {
        console.log("Failed to get data,", err);
      });
  }, []);

  const refreshPage = () => {
    axios
      .get("qa/questions", { params: { product_id: productId } })
      .then((res) => {
        setQuestion(res.data.results);
        setSave(res.data.results);
        setLength(res.data.results.length);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Failed to get data,", err);
      });
  };

  const editSearch = (query) => {
    query.preventDefault();
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

  const handleAHelpfulness = (answerId) => {
    axios
      .put(`qa/answers/${answerId}/helpful`)
      .then(() => {
        console.log("Your feedback has been submitted!");
        refreshPage();
      })
      .catch((err) => {
        console.log("Failed to submit a feedback: ", err);
      });
  };

  const handleQHelpfulness = (questionId) => {
    axios
      .put(`qa/questions/${questionId}/helpful`)
      .then((res) => {
        console.log("Your successfuly mark a question helpful!");
        refreshPage();
      })
      .catch((err) => {
        console.log("Failed to mark a question", err);
      });
  };

  const handleLoadMoreQ = () => {
    if (moreQ === false) {
      setLoadQ(!moreQ);
    }
    setCount(counter + 2);
  };

  const handleCloseQModal = () => modal.current.close();

  const handleAddQuestion = (event, id) => {
    event.preventDefault();
    let name = event.target[0].value;
    let email = event.target[1].value;
    let body = event.target[2].value;
    let product_id = id;
    // event.target.reset();
    //console.log('what is input:', {name, email, body, product_id} );
    //a correct format of email is required: aaa@qq.com

    axios
      .post("qa/questions", { name, email, body, product_id })
      .then((res) => {
        console.log("You submit a new question successfully!", res);
        handleCloseQModal();
      })
      .catch((err) => {
        console.log("Failed to post a new question.", err.response);
      });
  };

  return (
    <div className="QAbody">
      <h2 className="QAtitle">QUESTIONS AND ANSWERS</h2>
      <div>
        <Search editSearch={editSearch} />
      </div>
      <div>
        <Context.Provider
          value={{ handleAHelpfulness, product, handleQHelpfulness }}
        >
          <QuestionsList questions={questions.slice(0, 2)} />
        </Context.Provider>
      </div>
      <div class="LoadQButton">
        {questions.length > 2 ? (
          counter >= QuesArrayLength - 2 ? null : (
            <button className="button" onClick={handleLoadMoreQ}>
              MORE ANSWERED QUESTIONS
            </button>
          )
        ) : null}
      </div>
      <div>
        {moreQ ? (
          <Context.Provider value={{ handleQHelpfulness }}>
            <LoadMoreQ questions={questions.slice(counter, counter + 2)} />
          </Context.Provider>
        ) : null}
      </div>

      <div class="AddQButton">
        <button className="button" onClick={() => modal.current.open()}>
          ADD A QUESTION ➕
        </button>
      </div>
      <AddModal ref={modal}>
        <AddQuestionForm
          handleAddQuestion={handleAddQuestion}
          product={product}
        />
      </AddModal>
    </div>
  );
}
