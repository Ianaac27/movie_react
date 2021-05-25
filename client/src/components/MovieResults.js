import React from "react";
import SaveButton from "./SaveButton";

function MovieResults({movies, apiKey, setSavedMovies}) {

    return (
    <>
        {movies.length > 0 ? movies.map((movie, index)=>
        <div className="w-25 h-25">
                <img  src={movie.Poster} alt={movie.Title}/>
                <SaveButton movie={movie} apiKey={apiKey} setSavedMovies={setSavedMovies}/>
        </div>
        ):  <div className="col">
                <h3 className="fs-1 text-white text-center mt-5">Search for any movie!</h3>
            </div>}
    </>
    )
}

export default MovieResults