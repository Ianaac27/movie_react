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
        <Card.Body className="mod-main d-flex justify-content-center align-item-center m-5">
            <div className="movie-info d-flex flex-column w-50">
                <h5>{selectedSearch.title}</h5>
                <p>{selectedSearch.rated}</p>
                <p>{selectedSearch.year}</p>
                <p>Runtime: {selectedSearch.runtime}</p>
                <p>Starring: {selectedSearch.actors}</p>
                <p>Directed by: {selectedSearch.director}</p>
                <p>{selectedSearch.plot}</p>
                <RatingBarSearch selectedSearch={selectedSearch} />

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
            <div className="movie-sources d-flex flex-column ml-4">
                <img className="movie-poster" src={selectedSearch.poster} alt=""/>
                
                <YoutubeEmbed embedId={embedId} />

                <div className="movie-links d-flex flex-row mt-2">
                    <Button className="link-btn" href={googleSearch}>Purchase this {selectedSearch.type}</Button>
                </div>
            </div>
        </Card.Body>
    </Card>
    )
}

export default MovieModuleSearch;