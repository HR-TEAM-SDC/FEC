import React, { useState, useEffect } from 'react';
import axios from '../apis/atelier';
import RelatedItems from './RelatedItems';

const App = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    axios.get('products').then(res => setTest(res.data));
  }, []);

  return <RelatedItems />;
};

export default App;
