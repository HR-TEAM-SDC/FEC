import React from "react";
import ItemCard from "./ItemCard";

const RelatedItemsContainer = ({ relatedItems, selectedItem }) => {
  const renderCards = () => {
    return relatedItems ? (
      relatedItems.map((item) => (
        <ItemCard item={item} key={item.id} selectedItem={selectedItem} />
      ))
    ) : (
      <p>Loading...</p>
    );
  };

  return <div className="card-container">{renderCards()}</div>;
};

export default RelatedItemsContainer;
