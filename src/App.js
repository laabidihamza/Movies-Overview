import React from "react";
import { useEffect,useState } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=2c5bbdfb'

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}
const App = () => {

    const [movies,setMovies] = useState([]);

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json()

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman')
        /*fetch(API_URL)
        .then(res => res.json())
        .then(json => console.log(json))*/
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <MovieCard movie1={movies[0]}/>
            </div>
        </div>
    );
}

export default App;