import React from "react";

const ItemCard = ({ item }) => {
  const cardStyles = {
    border: `1px black solid`,
  };
  return (
    <section style={cardStyles}>
      {item.styles[0].photos[0].thumbnail_url ? (
        <img src={item.styles[0].photos[0].thumbnail_url} />
      ) : null}
      <h4>{item.name}</h4>
      <p>{item.category}</p>
      <p>{item.default_price}</p>
      <p>{item.avgRating}</p>
    </section>
  );
};

export default ItemCard;
