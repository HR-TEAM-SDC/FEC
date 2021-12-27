import React, { useRef } from "react";
import CompareModal from "./CompareModal";

const ItemCard = ({ item }) => {
  const modal = useRef(null);

  return (
    <section>
      <CompareModal ref={modal}>Hello, I'm a modal</CompareModal>
      <button onClick={() => modal.current.open()}>Compare</button>
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
