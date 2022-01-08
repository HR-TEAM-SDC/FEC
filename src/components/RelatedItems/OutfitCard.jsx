import React, { useContext } from 'react';
import localhost from '../../apis/localhost';
import { X } from 'react-feather';
import { AppContext } from '../context';
import Rating from '@mui/material/Rating';
import noImage from './No-image-found.jpeg';

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
        <img className="card-image" src={item.styles[0].photos[0].thumbnail_url ?? noImage} />
      </div>
      <div className="card-info-container">
        <p className="card-info category">{item.category}</p>
        <h3 className="card-info title">{item.name.length > 17 ? `${item.name.slice(0, 15)}...` : item.name}</h3>
        <p className="card-info">${item.default_price}</p>
        <p className="card-info">
          <Rating style={{ color: 'white' }} defaultValue={item.avgRating || 0} precision={0.25} readOnly />
        </p>
      </div>
    </section>
  );
};

export default OutfitCard;
