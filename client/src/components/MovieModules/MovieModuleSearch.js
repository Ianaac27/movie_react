import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../App.css";
import FavButtonSearch from "../FavButtonSearch/FavButtonSearch";
import RatingBarSearch from "../RatingBars/RatingBarSearch";
import YoutubeEmbed from "../YoutubeEmbed";

function MovieModuleSearch({selectedSearch, handleModuleLink, savedMovies, apiKey, setSavedMovies, open, setOpen, savedIds, setSavedIds, embedId}) {
    
    const googleSearch = "https://www.google.com/search?q="+ selectedSearch.title +"%20"+ selectedSearch.director +"%20"+ selectedSearch.type +"&sxsrf=ALeKk03oVOk4ImHSjhqk2XH-aldJbaO9Ug:1623276725144&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjhvsuEyYvxAhUR5J4KHTfMDqcQ_AUoA3oECAEQBQ&biw=1024&bih=625"

    return (
    <Card className="moduleTwo" >
        <div id="close-iconTwo" className="mod-closeTwo" onClick={handleModuleLink}>
            <span class="close-barTwo"></span>
            <span class="close-barTwo"></span>
        </div>
        <Card.Body className="mod-main d-flex flex-wrap-reverse justify-content-center align-item-center m-5">
            <div className="movie-info d-flex flex-column w-50">
                <h5>{selectedSearch.title}</h5>
                <p>{selectedSearch.rated}</p>
                <p>{selectedSearch.year}</p>
                <p>Runtime: {selectedSearch.runtime}</p>
                <p>Starring: {selectedSearch.actors}</p>
                <p>Directed by: {selectedSearch.director}</p>
                <p className="mb-3">{selectedSearch.plot}</p>
                <div className="d-flex flex-row justify-content-between mt-3 m-5">
                    <div className="d-flex flex-column justify-content-center ml-5">
                        <p className="text-center mt-2"> IMDb rating </p>
                        <RatingBarSearch selectedSearch={selectedSearch} />
                    </div>
                    <div className="d-flex flex-column justify-content-center ml-2">
                        <p className="text-center">Favorites List</p>
                        <FavButtonSearch 
                            open={open} 
                            setOpen={setOpen}
                            savedMovies={savedMovies} 
                            selectedSearch={selectedSearch} 
                            setSavedMovies={setSavedMovies}
                            apiKey={apiKey}
                            savedIds={savedIds}
                            setSavedIds={setSavedIds}
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-center mr-5 mt-4">
                        <Button variant="danger" className="purchase-btn btn mt-3" size="sm" href={googleSearch} >Purchase this {selectedSearch.type}</Button>    
                    </div>  
                </div>
            </div>
            <div className="movie-sources d-flex flex-column ml-2">
                <div className="d-flex flex-column justify-content-end ml-5 mb-3">
                    <img className="movie-poster" style={{"width": "275px", "height": "350px"}} src={selectedSearch.poster} alt=""/>
                    <YoutubeEmbed embedId={embedId} />
                </div>
            </div>
        </Card.Body>
    </Card>
    )
}

export default MovieModuleSearch;