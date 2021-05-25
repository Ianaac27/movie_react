import React, {useState} from "react";
import DeleteButton from "./DeleteButton";

function SavedMovies ({savedMovies, setSavedMovies}) {

    return (
        <>
        {savedMovies.length > 0 ? savedMovies.map((movie, index)=>
        <div className="w-25 h-25">
                <img  src={movie.poster} alt={movie.title}/>
                <DeleteButton id={movie._id} setSavedMovies={setSavedMovies} />
        </div>
        ): <h3 className="fs-1 text-white text-center mt-5">You have no saved movies</h3>}  
        </>
)
}

export default SavedMovies;