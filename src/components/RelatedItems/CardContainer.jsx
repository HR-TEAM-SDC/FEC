import React, { useContext, useRef, useState } from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import OutfitCard from './OutfitCard.jsx';
import { ChevronsLeft, ChevronsRight } from 'react-feather';
import { AppContext } from '../context';
import localhost from '../../apis/localhost';

const CardContainer = ({ cardItems, selectedItem }) => {
  const [isOverflownLeft, setIsOverflownLeft] = useState(false);
  const [isOverflownRight, setIsOverflownRight] = useState(false);
  const { currentProduct } = useContext(AppContext);
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
    if (cardItems && selectedItem) {
      return cardItems.map((item) => <RelatedItemCard item={item} key={item.id} selectedItem={selectedItem} />);
    } else if (cardItems) {
      return cardItems.map((item) => <OutfitCard item={item} key={item.id} />);
    } else {
      return <p>Loading...</p>;
    }
  };

  const handleAddToOutfit = async () => {
    const outfitIds = cardItems.reduce((allIds, current) => allIds.concat(current.id), []);
    outfitIds.includes(currentProduct.id)
      ? alert(`${currentProduct.name} is already in your outfit!`)
      : await localhost.post('outfit', { id: currentProduct.id });
  };

  return (
    <>
      {isOverflownLeft ? (
        <button className="scroll-button left" onClick={handleScrollLeft}>
          <ChevronsLeft />
        </button>
      ) : null}
      <div className="card-container" ref={thisRef} onLoad={isOverflowing}>
        {selectedItem ? null : (
          <section className="card" onClick={handleAddToOutfit}>
            {currentProduct ? `Add ${currentProduct.name} to your outfit` : null}
          </section>
        )}
        {renderCards()}
      </div>
      {isOverflownRight ? (
        <button className="scroll-button right" onClick={handleScrollRight}>
          <ChevronsRight />
        </button>
      ) : null}
    </>
  );
};

export default CardContainer;
