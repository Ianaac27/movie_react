import axios from "axios";
import React, {useState} from "react";
import MovieModuleSearch from "./MovieModules/MovieModuleSearch";
import movieTrailer from 'movie-trailer';

function SearchResults({movies, apiKey, setSavedMovies, savedMovies, open, setOpen, savedIds, setSavedIds, embedId, setEmbedId}) {

    const [selectedSearch, setSelectedSearch] = useState([]);

    const handleMovieModule = (e, movie) => {
        axios.get("http://www.omdbapi.com/?i=" + movie.imdbID + "&apikey=" + apiKey)
        .then(({data}) => {

                const movieTitle = data.Title
                const movieYear = data.Year

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
                handleMovieTrailer(movieTitle, movieYear)
                checkFav(movie)
            })
        }

        const handleMovieTrailer = ( movieTitle, movieYear  ) => {

            movieTrailer( movieTitle, {id: true, year: movieYear} )
            .then( res => setEmbedId(res) 
            )
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
        <div className="movie-card d-flex justify-contnet-start m-2">
                <img className="mod-toggleTwo" style= {{"height": "450px", "width": "325px"}} src={movie.Poster} alt={movie.Title} onClick={e => handleMovieModule(e, movie)} />
        </div>
        ):  <div className="col">
                {/* <h3 className="fs-1 text-white text-center mt-5">Search for any movie!</h3> */}
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
            embedId={embedId}
        />    
    </>
    )
}

export default SearchResults