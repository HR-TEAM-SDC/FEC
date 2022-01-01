import React, { useEffect, useRef, useState } from 'react';
import ItemCard from './ItemCard.jsx';
import { ChevronsLeft, ChevronsRight } from 'react-feather';

const CardContainer = ({ cardItems, selectedItem }) => {
  const [isOverflownLeft, setIsOverflownLeft] = useState(false);
  const [isOverflownRight, setIsOverflownRight] = useState(false);
  const thisRef = useRef();

  const isOverflowing = () => {
    const bool = thisRef.current.scrollWidth > thisRef.current.clientWidth;
    setIsOverflownRight(bool);
  };

  const handleScrollLeft = () => {
    setIsOverflownRight(true);
    thisRef.current.scrollLeft -= 300;
    if (thisRef.current.scrollLeft <= 300) {
      setIsOverflownLeft(false);
    }
  };

  const handleScrollRight = () => {
    setIsOverflownLeft(true);
    thisRef.current.scrollLeft += 300;
    if (thisRef.current.scrollLeft >= thisRef.current.scrollWidth - thisRef.current.clientWidth - 350) {
      setIsOverflownRight(false);
    }
  };

  const renderCards = () => {
    return cardItems ? (
      cardItems.map((item) => <ItemCard item={item} key={item.id} selectedItem={selectedItem} />)
    ) : (
      <p>Loading...</p>
    );
  };

  return (
    <div className="card-container" ref={thisRef} onLoad={isOverflowing}>
      {isOverflownLeft ? (
        <button className="scroll-button left" onClick={handleScrollLeft}>
          <ChevronsLeft />
        </button>
      ) : null}
      {renderCards()}
      {isOverflownRight ? (
        <button className="scroll-button right" onClick={handleScrollRight}>
          <ChevronsRight />
        </button>
      ) : null}
    </div>
  );
};

export default CardContainer;
