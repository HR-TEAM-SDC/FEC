import React, { useState, useEffect } from 'react';
import axios from '../apis/atelier';
import QAapp from '../components/QandA/QAindex.jsx';

const App = () => {

  // const [test, setTest] = useState(null);

  // useEffect(() => {
  //   axios.get('qa/questions').then(res => { setTest(res.data);});
  // }, []);

  return (
    <div>
      {/* <h2>Hi guys !!!</h2>
      <h3>Date : {new Date().toDateString()}</h3> */}
      <div><QAapp /></div>
    </div>
  );
};

export default App;
