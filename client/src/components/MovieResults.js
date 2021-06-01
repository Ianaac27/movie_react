import axios from "axios";
import React, {useState} from "react";
import MovieModuleTwo from "./MovieModuleTwo";
// import SaveButton from "./SaveButton";

function MovieResults({movies, apiKey, setSavedMovies, savedMovies}) {

    const [selectedSearch, setSelectedSearch] = useState([]);

    const handleMovieModule = (e, movie) => {
        axios.get("http://www.omdbapi.com/?i=" + movie.imdbID + "&apikey=" + apiKey)
        .then(({data}) => {
            setSelectedSearch({
                actors: data.Actors,
                director: data.Director,
                id: data.imdbID,
                score: data.imdbRating,
                plot: data.Plot,
                poster: data.Poster, 
                rated: data.Rated,
                runtime: data.Runtime, 
                title: data.Title,
                type: data.Type,
                year: data.Year
            })
            document.body.classList.toggle('mod-openTwo');
          })
        }
          
        const handleModuleLink = e => {
              document.body.classList.remove('mod-openTwo');
          }    

    return (
    <>
        {movies.length > 0 ? movies.map((movie, index)=>
        <div className="w-25 h-25">
                <img className="mod-toggleTwo" src={movie.Poster} alt={movie.Title} onClick={e => handleMovieModule(e, movie)} />
                {/* <SaveButton savedMovies={savedMovies} movie={movie} apiKey={apiKey} setSavedMovies={setSavedMovies}/> */}
        </div>
        ):  <div className="col">
                <h3 className="fs-1 text-white text-center mt-5">Search for any movie!</h3>
            </div>}
        <MovieModuleTwo 
        savedMovies={savedMovies}
        apiKey={apiKey}
        setSavedMovies={setSavedMovies}
        
        selectedSearch={selectedSearch} 
        handleModuleLink={handleModuleLink} />    
    </>
    )
}

export default MovieResults