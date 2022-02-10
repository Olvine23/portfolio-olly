import React from 'react';

const Movie = ({name, price}) => {
  return (
    <div>
        <h2>{name}{price}</h2>

    </div>
  );
};

export default Movie;
