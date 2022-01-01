import React, { useRef, useContext } from 'react';
import CompareModal from './CompareModal.jsx';
import { AppContext } from '../context';
import { Star } from 'react-feather';

const ItemCard = ({ item, selectedItem }) => {
  const { setCurrentProduct } = useContext(AppContext);
  const modal = useRef();

  const handleFormat = () => {
    const formatFeatures = {};
    item.features.forEach(({ feature, value }) => (formatFeatures[feature] = { itemValue: value ? value : '✔️' }));
    selectedItem.features.forEach(({ feature, value }) => {
      if (formatFeatures[feature]) formatFeatures[feature]['selectedItemValue'] = value ? value : '✔️';
      else formatFeatures[feature] = { selectedItemValue: value ? value : '✔️' };
    });

    const featuresArray = [];
    for (let key in formatFeatures) {
      featuresArray.push([key, formatFeatures[key].itemValue || '-', formatFeatures[key].selectedItemValue || '-']);
    }
    return featuresArray;
  };

  const renderTable = () => {
    return handleFormat().map((feature) => {
      return (
        <tr key={feature[0]}>
          <td>{feature[1]}</td>
          <td>{feature[0]}</td>
          <td>{feature[2]}</td>
        </tr>
      );
    });
  };

  return (
    <section className="card">
      <CompareModal ref={modal}>
        <table>
          <tbody>
            <tr>
              <th key={item.id}>{item.name}</th>
              <th key="blankspace">{'Comparing...'}</th>
              <th key={selectedItem.id}>{selectedItem.name}</th>
            </tr>
            {renderTable()}
          </tbody>
        </table>
      </CompareModal>
      <Star className="card-button" size={48} aria-label="Compare" onClick={() => modal.current.open()} />
      <div className="card-image-container">
        {item.styles[0].photos[0].thumbnail_url ? (
          <img className="card-image" src={item.styles[0].photos[0].thumbnail_url} />
        ) : null}
      </div>
      <div className="card-info-container">
        <p className="card-info">{item.category}</p>
        <h3 className="card-info" onClick={() => setCurrentProduct(item)}>
          {item.name}
        </h3>
        <p className="card-info">${item.default_price}</p>
        <p className="card-info">{item.avgRating}</p>
      </div>
    </section>
  );
};

export default ItemCard;
