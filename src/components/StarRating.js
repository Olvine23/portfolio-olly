import React , {useState} from 'react';
import { Star } from './Star';



const createArray = length => [...Array(length)];

const StarRating = ({style ={} , totalStars= 5, selectedStars= 0, onRate= f=> f}) => {
     
  return(
  <div style={{padding:"19px", ...style}}>
   {createArray(totalStars).map((n,i) =>( <Star
    key = {i} 
    selected ={selectedStars > i} 
    onSelect={() => onRate(i +1 )}
     />
    ))}

   <p>{selectedStars} out of {totalStars}</p>
   </div>
  )
};

export default StarRating;
