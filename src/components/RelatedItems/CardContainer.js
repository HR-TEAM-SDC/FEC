import React, { useEffect, useRef, useState } from "react";
import ItemCard from "./ItemCard";

const CardContainer = ({ cardItems, selectedItem }) => {
  const [isOverflownLeft, setIsOverflownLeft] = useState(false);
  const [isOverflownRight, setIsOverflownRight] = useState(false);
  const thisRef = useRef();

  useEffect(() => {
    console.log(thisRef.current.scrollLeft);
  }, [thisRef]);

  const renderCards = () => {
    return cardItems ? (
      cardItems.map((item) => (
        <ItemCard item={item} key={item.id} selectedItem={selectedItem} />
      ))
    ) : (
      <p>Loading...</p>
    );
  };

  return (
    <div className="card-container" ref={thisRef}>
      {/* {isOverflown ? console.log('hi') : console.log('fuck')} */}
      {renderCards()}
      <button>{">>"}</button>
    </div>
  );
};

export default CardContainer;
