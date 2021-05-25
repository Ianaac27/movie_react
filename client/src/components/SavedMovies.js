import React, {useState} from "react";
import DeleteButton from "./DeleteButton";

function SavedMovies ({savedMovies, setSavedMovies}) {

    return (
        <div className="col">
             <h1 className="fs-1 text-white text-center mt-5">Favorites</h1>
             <div className="row" id="faveMovies">
                {savedMovies.length > 0 ? savedMovies.map((movie, index)=>
                <div className="w-25 h-25">
                        <img  src={movie.poster} alt={movie.title}/>
                        <DeleteButton id={movie._id} setSavedMovies={setSavedMovies} />
                </div>
                ):  <div className="col">
                        <h3 className="fs-1 text-white text-center mt-5">You have no saved movies</h3>  
                    </div>}
            </div>
        </div>
)
}

export default SavedMovies;