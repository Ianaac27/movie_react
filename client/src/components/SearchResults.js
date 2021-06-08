import axios from "axios";
import React, {useState} from "react";
import MovieModuleSearch from "./MovieModules/MovieModuleSearch";

function SearchResults({movies, apiKey, setSavedMovies, savedMovies, open, setOpen, savedIds, setSavedIds}) {

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
                checkFav(movie)
            })
        }
          
        const handleModuleLink = e => {
              document.body.classList.remove('mod-openTwo');
          }    

          const checkFav = (movie) => {
            let checker = true;
            if (savedIds.length == 0) {
                checker = false;
            }
            else {
                    if (savedIds.includes(movie.imdbID)) {
                        checker = true;
                    } 
                    else {
                        checker = false;
                    }
                }
            setToggle(checker)
          }

          const setToggle = checker => {
            console.log(checker)
            if (checker == true) {
                    setOpen(true)
                console.log("Set open to true")
            } else {
                    setOpen(false)
                console.log("Set open to false") 
            }
            document.body.classList.toggle('mod-openTwo');
          }

    return (
    <>
        {movies.length > 0 ? movies.map((movie, index)=>
        <div className="w-25 h-25">
                <img className="mod-toggleTwo" src={movie.Poster} alt={movie.Title} onClick={e => handleMovieModule(e, movie)} />
        </div>
        ):  <div className="col">
                <h3 className="fs-1 text-white text-center mt-5">Search for any movie!</h3>
            </div>}
        <MovieModuleSearch 
            savedMovies={savedMovies}
            apiKey={apiKey}
            setSavedMovies={setSavedMovies}
            selectedSearch={selectedSearch} 
            handleModuleLink={handleModuleLink}
            open={open} 
            setOpen={setOpen}
            savedIds={savedIds}
            setSavedIds={setSavedIds}  
        />    
    </>
    )
}

export default SearchResults