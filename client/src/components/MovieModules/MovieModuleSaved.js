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
        <h1 className="movie-title text-center mt-5">{selectedMovie.title}</h1>
        <Card.Body className="mod-main d-flex flex-wrap justify-content-center align-item-center m-5">
            <div className="movie-sources d-flex flex-column">
                <div className="media-content d-flex flex-column justify-content-center mb-3 ml-5">
                    <img className="movie-poster ml-5 mb-3" style={{"width": "290px", "height": "350px"}}  src={selectedMovie.poster} alt=""/>
                    <YoutubeEmbed embedId={embedId} />
                </div>
            </div>
            <div className="movie-info d-flex flex-column w-50 ml-5">
                <h2 className="ml-4">{selectedMovie.rated}</h2>
                <p className="ml-4 mt-2">{selectedMovie.year}</p>
                <p className="ml-4 mt-2">Runtime: {selectedMovie.runtime}</p>
                <p className="ml-4 mt-2">Starring: {selectedMovie.actors}</p>
                <p className="ml-4 mt-2">Directed by: {selectedMovie.director}</p>
                <p className="ml-4 mb-3 mt-2">{selectedMovie.plot}</p>
                <div className="media-graphics d-flex flex-row justify-content-start mt-3 ml-5">
                    <div className="rating-info d-flex flex-column justify-content-center mr-5 mt-4">
                        <p className="text-center"> IMDb rating </p>
                        <RatingBar selectedMovie={selectedMovie} />
                    </div>
                    <div className="fav-functions d-flex flex-column justify-content-center mt-2 ml-4">
                        <p className="text-center mt-4 ml-1">Favorites List</p>
                        <FavButton 
                            open={open} 
                            setOpen={setOpen} 
                            id={selectedMovie._id} 
                            setSavedMovies={setSavedMovies} 
                            selectedMovie={selectedMovie}
                            savedIds={savedIds}
                            setSavedIds={setSavedIds}/>
                        <Button variant="danger" className="purchase-btn btn mt-3 ml-3" size="sm" href={googleSearch} >Purchase this {selectedMovie.type}</Button>
                    </div>
                </div>
            </div>
        </Card.Body>
    </Card>
    )
}

export default MovieModuleSaved;