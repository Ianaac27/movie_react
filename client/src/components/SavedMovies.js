import React, {useState} from "react";
import MovieModuleSaved from "./MovieModules/MovieModuleSaved";
import movieTrailer from 'movie-trailer';

function SavedMovies ({savedMovies, setSavedMovies, open, setOpen, savedIds, setSavedIds, embedId, setEmbedId}) {

        const [selectedMovie, setSelectedMovie] = useState([]);

        const handleMovieModule = (e, movie) => {

                const movieTitle = movie.title

                setSelectedMovie(movie)
                handleMovieTrailer(movieTitle)
                checkFav(movie)
              }

        const handleMovieTrailer = ( movieTitle ) => {

            movieTrailer( movieTitle, {id: true} )
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