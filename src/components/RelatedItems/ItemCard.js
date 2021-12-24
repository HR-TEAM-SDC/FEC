import React from 'react';

const ItemCard = ({ item }) => (
  <div>
    {item.styles[0].photos[0].thumbnail_url ? (
      <img src={item.styles[0].photos[0].thumbnail_url} />
    ) : null}
    <div>{item.category}</div>
    <div>{item.name}</div>
    <div>{item.default_price}</div>
    <div>{item.avgRating}</div>
  </div>
);

export default ItemCard;
