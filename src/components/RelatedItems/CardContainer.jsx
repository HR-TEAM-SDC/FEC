import React, { useEffect, useRef, useState } from "react";
import ItemCard from "./ItemCard.jsx";

const CardContainer = ({ cardItems, selectedItem }) => {
  const [isOverflownLeft, setIsOverflownLeft] = useState(false);
  const [isOverflownRight, setIsOverflownRight] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const thisRef = useRef();

  const isOverflowing = () => {
    const bool = thisRef.current.scrollWidth > thisRef.current.clientWidth;
    console.log(thisRef);
    setIsOverflownRight(bool);
  };

  const handleScrollLeft = () => {
    setIsOverflownRight(true);
    thisRef.current.scrollLeft -= 300;
    setScrollPosition(thisRef.current.scrollLeft);
  };

  const handleScrollRight = () => {
    setIsOverflownLeft(true);
    thisRef.current.scrollLeft += 300;
    setScrollPosition(thisRef.current.scrollLeft);
  };

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
    <div
      className="card-container"
      ref={thisRef}
      onScroll={() => setScrollPosition(thisRef.current.scrollLeft)}
      onLoad={isOverflowing}
    >
      {isOverflownLeft ? (
        <button className="list-scroll-button" onClick={handleScrollLeft}>
          {"<<"}
        </button>
      ) : null}
      {renderCards()}
      {isOverflownRight ? (
        <button className="list-scroll-button" onClick={handleScrollRight}>
          {">>"}
        </button>
      ) : null}
    </div>
  );
};

export default CardContainer;
