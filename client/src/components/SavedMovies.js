import React, {useState} from "react";
import MovieModuleSaved from "./MovieModules/MovieModuleSaved";
import movieTrailer from 'movie-trailer';

function SavedMovies ({savedMovies, setSavedMovies, open, setOpen, savedIds, setSavedIds, embedId, setEmbedId}) {

        const [selectedMovie, setSelectedMovie] = useState([]);

        const handleMovieModule = (e, movie) => {

                const movieTitle = movie.title
                const movieYear = movie.year

                setSelectedMovie(movie)
                handleMovieTrailer(movieTitle, movieYear)
                checkFav(movie)
              }

        const handleMovieTrailer = ( movieTitle, movieYear ) => {

            movieTrailer( movieTitle, {id: true, year: movieYear} )
            .then( res => setEmbedId(res) 
            )
        }
        
        const handleModuleLink = e => {
                document.body.classList.remove('mod-open');
        }  

        const checkFav = (movie) => {
                let checker = true;
                if (savedIds.length == 0) {
                    checker = false;
                }
                else {
                        if (savedIds.includes( movie.id )) {
                            checker = true;
                        } 
                        else {
                            checker = false;
                        }
                }
                setToggle(checker)
              }

        const setToggle = checker => {
            if (checker == true) {
                    setOpen(true)
                console.log("Set open to true")
            } else {
                    setOpen(false)
                console.log("Set open to false") 
            }
            document.body.classList.toggle('mod-open');
        }
        

    return (
        <>
        <div className="col">
             <h1 className="fs-1 text-white ml-2 mt-2">Favorites</h1>
             <div className="row" id="faveMovies">
                {savedMovies.length > 0 ? savedMovies.map((movie, index)=>
                <div className="movie-card d-flex justify-contnet-start m-2">
                    <img className="mod-toggle" style= {{"height": "450px", "width": "325px"}} id={movie.id} src={movie.poster} alt={movie.title} onClick={e => handleMovieModule(e, movie)}/>
                </div>
                ):  <div className="col">
                        <h3 className="fs-1 text-white text-center mt-4 mb-5">You have no saved movies</h3>  
                    </div>}
            </div>
            
        </div>
        <MovieModuleSaved 
                selectedMovie={selectedMovie} 
                savedMovies={savedMovies} 
                setSavedMovies={setSavedMovies} 
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

export default SavedMovies;