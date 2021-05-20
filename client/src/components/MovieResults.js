import React from "react";
import SaveButton from "./SaveButton";

function MovieResults({movies, apiKey}) {

    return (
    <>
        {movies.map((movie, index)=>
        <div className="w-25 h-25">
                <img  src={movie.Poster} alt={movie.Title}/>
                <SaveButton movie={movie} apiKey={apiKey}/>
        </div>
        )}
    </>
    )
}

export default MovieResults