import React from "react";
import ItemCard from "./ItemCard";

const RelatedItemsContainer = ({ items }) => {
  const renderCards = () => {
    return items ? (
      items.map((item) => <ItemCard item={item} key={item.id} />)
    ) : (
      <div>Loading...</div>
    );
  };

  return <>{renderCards()}</>;
};

export default RelatedItemsContainer;
