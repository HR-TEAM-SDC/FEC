import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier';
import QuestionsList from './QuestionsList.jsx';
import { Context } from '../context/context.js';


export default function QAapp() {
  // Declare a new state variable
  const [questions, addQuestion] = useState([]);

  useEffect(() => {
    axios.get('qa/questions', {params: {product_id: 40344}})
      .then(res => {
        addQuestion(res.data.results)
        console.log(res.data);
      })
      .catch(err => {
        console.log('Failed to get data,', err);
      });
  }, []);

  return (
    <div>
      <h2>QUESTIONS AND ANSWERS</h2>
      <div>
        <Context.Provider value ={{questions, addQuestion}}>
          <QuestionsList questions={questions}/>
        </Context.Provider>
      </div>
    </div>
  );
}