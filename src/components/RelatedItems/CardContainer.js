import React, { useEffect, useRef, useState } from "react";
import ItemCard from "./ItemCard";

const CardContainer = ({ cardItems, selectedItem }) => {
  const [isOverflownLeft, setIsOverflownLeft] = useState(false);
  const [isOverflownRight, setIsOverflownRight] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const thisRef = useRef();

  // useEffect(() => {
  //   handleScrollLeft();
  //   handleScrollRight();
  // }, [scrollPosition]);

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
        <button
          style={{ position: "sticky", left: "10px", zIndex: 100 }}
          onClick={handleScrollLeft}
        >
          {"<<"}
        </button>
      ) : null}
      {renderCards()}
      {isOverflownRight ? (
        <button
          style={{ position: "sticky", right: "10px", zIndex: 100 }}
          onClick={handleScrollRight}
        >
          {">>"}
        </button>
      ) : null}
    </div>
  );
};

export default CardContainer;
