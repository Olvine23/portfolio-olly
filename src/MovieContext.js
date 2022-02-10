import React , {useState, createContext} from 'react';

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name:'Peter Pan',
            price:'$10',
            id: 2212
        },
        {
            name: 'Spider Man',
            price:'$400',
            id: 3339
        },
        {
            name:'SpongeBob',
            price:'$500',
            id:56565
        }

    ]);

    return(
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}

            </MovieContext.Provider>

        </div>
    )
}