import React from "react";

function MovieResults({movies}) {

    return (
    <>
        {movies.map((movie, index)=>
        <div className="w-25 h-25">
                <img  src={movie.Poster} alt={movie.Title}/>
        </div>
        )}
    </>
    )
}

export default MovieResults