import React, {useState} from "react";
import MovieModule from "./MovieModule";
// import "../App.css"

function SavedMovies ({savedMovies, setSavedMovies}) {

        const [selectedMovie, setSelectedMovie] = useState([]);

        const handleMovieModule = (e, movie) => {
                setSelectedMovie(movie)
                document.body.classList.toggle('mod-open');
              }
        
        const handleModuleLink = e => {
                document.body.classList.remove('mod-open');
        }    

    return (
        <>
        <div className="col">
             <h1 className="fs-1 text-white text-center mt-5">Favorites</h1>
             <div className="row" id="faveMovies">
                {savedMovies.length > 0 ? savedMovies.map((movie, index)=>
                <div className="w-25 h-25" >
                        <img className="mod-toggle" id={movie.id} src={movie.poster} alt={movie.title} onClick={e => handleMovieModule(e, movie)}/>
                </div>
                ):  <div className="col">
                        <h3 className="fs-1 text-white text-center mt-5">You have no saved movies</h3>  
                    </div>}
            </div>
            
        </div>
        <MovieModule selectedMovie={selectedMovie} savedMovies={savedMovies} setSavedMovies={setSavedMovies} handleModuleLink={handleModuleLink}  />
        </>
)
}

export default SavedMovies;