import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../App.css";
import FavButton from "../FavButton/FavButton";
import RatingBar from "../RatingBar";


function MovieModuleSaved({selectedMovie, setSavedMovies, handleModuleLink, open, setOpen, savedIds, setSavedIds}) {
    
    return (
    <Card className="module" >
        <div id="close-icon" className="mod-close" onClick={handleModuleLink}>
            <span class="close-bar"></span>
            <span class="close-bar"></span>
        </div>
        <Card.Body className="mod-main d-flex justify-content-center align-item-center m-5">
            <div className="movie-info d-flex flex-column w-50">
                <h5>{selectedMovie.title}</h5>
                <p>{selectedMovie.rated}</p>
                <p>{selectedMovie.year}</p>
                <p>Runtime: {selectedMovie.runtime}</p>
                <p>Starring: {selectedMovie.actors}</p>
                <p>Directed by: {selectedMovie.director}</p>
                <p>{selectedMovie.plot}</p>
                {/* <p>IMDB Rating: {selectedMovie.score}</p> */}
                <RatingBar selectedMovie={selectedMovie} />

                <FavButton 
                    open={open} 
                    setOpen={setOpen} 
                    id={selectedMovie._id} 
                    setSavedMovies={setSavedMovies} 
                    selectedMovie={selectedMovie}
                    savedIds={savedIds}
                    setSavedIds={setSavedIds}/>

            </div>
            <div className="movie-sources d-flex flex-column ml-4">
                <img className="movie-poster" src={selectedMovie.poster} alt=""/>
                <div className="movie-links d-flex flex-row mt-2">
                    <Button className="link-btn mr-2">Watch the Trailer</Button>
                    <Button className="link-btn">Purchase this {selectedMovie.type}</Button>
                </div>
            </div>
        </Card.Body>
    </Card>
    )
}

export default MovieModuleSaved;