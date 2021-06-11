import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../App.css";
import FavButton from "../FavButton/FavButton";
import RatingBar from "../RatingBars/RatingBar";
import YoutubeEmbed from "../YoutubeEmbed";

function MovieModuleSaved({selectedMovie, setSavedMovies, handleModuleLink, open, setOpen, savedIds, setSavedIds, embedId}) {

    const googleSearch = "https://www.google.com/search?q="+ selectedMovie.title +"%20"+ selectedMovie.director +"%20"+ selectedMovie.type +"&sxsrf=ALeKk03oVOk4ImHSjhqk2XH-aldJbaO9Ug:1623276725144&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjhvsuEyYvxAhUR5J4KHTfMDqcQ_AUoA3oECAEQBQ&biw=1024&bih=625"
    
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

                <YoutubeEmbed embedId={embedId} />
                <div className="movie-links d-flex flex-row mt-2">
                    <Button className="link-btn" href={googleSearch} >Purchase this {selectedMovie.type}</Button>
                </div>
            </div>
        </Card.Body>
    </Card>
    )
}

export default MovieModuleSaved;