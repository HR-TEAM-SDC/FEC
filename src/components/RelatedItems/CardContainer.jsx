import React, { useContext, useRef, useState } from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import OutfitCard from './OutfitCard.jsx';
import { ChevronsLeft, ChevronsRight, Plus } from 'react-feather';
import { AppContext } from '../context';
import localhost from '../../apis/localhost';
import { textAlign } from '@mui/system';

const CardContainer = ({ cardItems, selectedItem, fetchOutfit }) => {
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
    thisRef.current.scrollLeft -= 310;
    if (thisRef.current.scrollLeft <= 300) {
      setIsOverflownLeft(false);
    }
  };

  const handleScrollRight = () => {
    setIsOverflownLeft(true);
    thisRef.current.scrollLeft += 310;
    if (thisRef.current.scrollLeft >= thisRef.current.scrollWidth - thisRef.current.clientWidth - 370) {
      setIsOverflownRight(false);
    }
  };

  const renderCards = () => {
    if (cardItems && selectedItem) {
      return cardItems.map((item) => <RelatedItemCard item={item} key={item.id} selectedItem={selectedItem} />);
    } else if (cardItems) {
      return cardItems.map((item) => <OutfitCard item={item} key={item.id} fetchOutfit={fetchOutfit} />);
    } else {
      return <p>Loading...</p>;
    }
  };

  const handleAddToOutfit = async () => {
    const outfitIds = cardItems.reduce((allIds, current) => allIds.concat(current.id), []);
    if (outfitIds.includes(currentProduct.id)) {
      return;
    } else {
      await localhost.post('outfit', { id: currentProduct.id });
      fetchOutfit();
    }
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
          <section className="outfit-card card" onClick={handleAddToOutfit}>
            {currentProduct ? (
              <>
                <p>Add {currentProduct.name} to your outfit</p>
                <Plus size={48} />
              </>
            ) : null}
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
