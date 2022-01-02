import React, { useRef, useContext, useState } from 'react';
import CompareModal from './CompareModal.jsx';
import { AppContext } from '../context';
import { Star } from 'react-feather';

const RelatedItemCard = ({ item, selectedItem }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { setCurrentProduct } = useContext(AppContext);

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

  const handleCompareClick = (e) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const handleCardClick = (e) => {
    setCurrentProduct(item);
  };
  return (
    <>
      <CompareModal open={modalOpen} onClose={() => setModalOpen(false)}>
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
      <section className="card" onClick={handleCardClick}>
        <Star className="card-button" size={48} aria-label="Compare" onClick={(e) => handleCompareClick(e)} />
        <div className="card-image-container">
          {item.styles[0].photos[0].thumbnail_url ? (
            <img className="card-image" src={item.styles[0].photos[0].thumbnail_url} />
          ) : null}
        </div>
        <div className="card-info-container">
          <p className="card-info category">{item.category}</p>
          <h3 className="card-info title">{item.name}</h3>
          <p className="card-info">${item.default_price}</p>
          <p className="card-info">{item.avgRating || 0}</p>
        </div>
      </section>
    </>
  );
};

export default RelatedItemCard;
