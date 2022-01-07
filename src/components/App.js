import React, { useState, useEffect, useRef } from 'react';
import axios from '../apis/atelier';
import ProductDetails from './ProductDetails/ProductDetails';
import RelatedItems from './RelatedItems/index.jsx';
import QAapp from '../components/QandA/QAindex.jsx';
import RRIndex from './Review/RRIndex.jsx';
import { AppContext } from './context';
import './styles.css';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const thisRef = useRef();

  useEffect(() => {
    fetchCurrentProduct();
    thisRef.current.addEventListener('click', analytics);
  }, []);

  const analytics = (e) => {
    const element = e.srcElement.localName;
    const widget = e.path.slice(-7)[0].className || 'body';
    const time = new Date().toISOString();
    const body = { element, widget, time };
    try {
      axios.post('interactions', body);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurrentProduct = async () => {
    try {
      const { data: products } = await axios.get('products');
      const { data: initialProductDetail } = await axios.get(`products/${products[0].id}`);
      setCurrentProduct(initialProductDetail);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main ref={thisRef}>
      <header>Team Woody</header>
      <AppContext.Provider value={{ currentProduct, setCurrentProduct }}>
        <ProductDetails />
        <RelatedItems />
        <QAapp />
        <RRIndex />
      </AppContext.Provider>
    </main>
  );
};

export default App;
