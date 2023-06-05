import React from "react";
const MovieCard = ({movie1}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie1.Year}</p>
            </div>
            <div>
                <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt="movie" />
            </div>
            <div>
                <spann>{movie1.Type}</spann>
                <h3>{movie1.Title}</h3>
            </div>
        </div>        
    );
}

export default MovieCard;