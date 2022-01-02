import React, { useContext } from 'react';
import localhost from '../../apis/localhost';
import { X } from 'react-feather';
import { AppContext } from '../context';
import Rating from '@mui/material/Rating';

const OutfitCard = ({ item, fetchOutfit }) => {
  const { setCurrentProduct } = useContext(AppContext);
  const handleRemoveFromOutfit = async (e) => {
    e.stopPropagation();
    await localhost.delete(`outfit/${item.id}`);
    fetchOutfit();
  };

  return (
    <section className="card" onClick={() => setCurrentProduct(item)}>
      <X className="card-button" size={48} aria-label="Compare" onClick={(e) => handleRemoveFromOutfit(e)} />
      <div className="card-image-container">
        {item.styles[0].photos[0].thumbnail_url ? (
          <img className="card-image" src={item.styles[0].photos[0].thumbnail_url} />
        ) : null}
      </div>
      <div className="card-info-container">
        <p className="card-info category">{item.category}</p>
        <h3 className="card-info title">{item.name}</h3>
        <p className="card-info">${item.default_price}</p>
        <p className="card-info">
          <Rating style={{ color: 'black' }} defaultValue={item.avgRating || 0} precision={0.25} readOnly />
        </p>
      </div>
    </section>
  );
};

export default OutfitCard;
