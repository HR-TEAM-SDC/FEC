import React, { useState, useEffect } from 'react';
import axios from '../apis/atelier';
import RRIndex from './Review/RRIndex.jsx';

const App = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    axios.get('products').then(res => setTest(res.data));
  }, []);

  return (
    <div>
      <h3>Date : {new Date().toDateString()}</h3>
      <RRIndex />
    </div>
  );
};

export default App;
