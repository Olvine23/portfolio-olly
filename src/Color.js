import React from 'react';
import StarRating from './components/StarRating';
import {FaTrash} from 'react-icons/fa'
const Color = ({id , title, color, rating, onRemove= f => f, onRate =f => f}) => {
  return (
  <div>

      <h2>{title}</h2>
      <button onClick={() => onRemove(id)}>
      <FaTrash />
        
      </button>
      
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating 
      selectedStars={rating}
      onRate={rating => onRate(id, rating)} />
  </div>
  );
};

export default Color;
