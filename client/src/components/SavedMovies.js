import React, {useState} from "react";
import MovieModuleSaved from "./MovieModules/MovieModuleSaved";
// import "../App.css"

function SavedMovies ({savedMovies, setSavedMovies, open, setOpen}) {

        const [selectedMovie, setSelectedMovie] = useState([]);

        const handleMovieModule = (e, movie) => {
                setSelectedMovie(movie)
                checkFav(movie)
              }
        
        const handleModuleLink = e => {
                document.body.classList.remove('mod-open');
        }  

        const checkFav = (movie) => {
                let checker = true;
              
                if (savedMovies.length == 0) {
                    checker = false;
                }
                else {
                    for (var i = 0; i < savedMovies.length; i++) {
                        if (savedMovies[i].id == movie.id) {
                            checker = true;
                        } 
                        else {
                            checker = false;
                        }
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
        />
        </>
)
}

export default SavedMovies;