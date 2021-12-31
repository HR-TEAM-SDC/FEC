import React, { useRef } from "react";
import CompareModal from "./CompareModal.jsx";

const ItemCard = ({ item, selectedItem }) => {
  const modal = useRef();

  const formatFeatures = {};
  item.features.forEach(
    ({ feature, value }) =>
      (formatFeatures[feature] = { itemValue: value ? value : "✔️" })
  );
  selectedItem.features.forEach(({ feature, value }) => {
    if (formatFeatures[feature])
      formatFeatures[feature]["selectedItemValue"] = value ? value : "✔️";
    else formatFeatures[feature] = { selectedItemValue: value ? value : "✔️" };
  });

  const featuresArray = [];
  for (let key in formatFeatures) {
    featuresArray.push([
      key,
      formatFeatures[key].itemValue || "-",
      formatFeatures[key].selectedItemValue || "-",
    ]);
  }

  const renderTable = () => {
    return featuresArray.map((feature) => {
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
              <th key="blankspace">{"Comparing..."}</th>
              <th key={selectedItem.id}>{selectedItem.name}</th>
            </tr>
            {renderTable()}
          </tbody>
        </table>
      </CompareModal>
      <button className="card-button" onClick={() => modal.current.open()}>
        Compare
      </button>
      <div className="card-image-container">
        {item.styles[0].photos[0].thumbnail_url ? (
          <img
            className="card-image"
            src={item.styles[0].photos[0].thumbnail_url}
          />
        ) : null}
      </div>
      <h4 className="card-info">{item.name}</h4>
      <p className="card-info">{item.category}</p>
      <p className="card-info">{item.default_price}</p>
      <p className="card-info">{item.avgRating}</p>
    </section>
  );
};

export default ItemCard;
