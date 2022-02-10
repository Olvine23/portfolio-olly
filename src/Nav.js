import React from 'react';
import { useContext } from 'react';
import { MovieContext } from './MovieContext';



const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext) 
  return( 
    <div className='nav'>
        <h2>Olvine George</h2>
        <p>List of movies: {movies.length}</p>
    </div>
    );
};

export default Nav;
