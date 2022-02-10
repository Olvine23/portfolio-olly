import React from "react"
import { useState, useContext } from "react";
 
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {

    const [movies,setMovies] = useContext(MovieContext)
    
    return(
        <>
       <h2>Movies </h2>
       
    
        {movies.map((movie) => (
            <>
            <Movie name={movie.name} price={movie.price} key={movie.id}/>
            </>
        ))}
        
        </>
    )
}

export default MovieList;