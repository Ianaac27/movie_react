import React from "react";

function MovieResults({movies}) {

    return (
    <>
        <img src={movies[0].Poster} alt={movies[0].Title}/>
    </>
    )
}

export default MovieResults