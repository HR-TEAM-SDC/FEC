import React from 'react';

const OutfitCard = ({ item }) => {
  return (
    <section className="card">
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
  );
};

export default OutfitCard;
