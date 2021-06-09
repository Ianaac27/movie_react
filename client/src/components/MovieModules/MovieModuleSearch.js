import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../App.css";
import FavButtonSearch from "../FavButtonSearch/FavButtonSearch";

function MovieModuleSearch({selectedSearch, handleModuleLink, savedMovies, apiKey, setSavedMovies, open, setOpen, savedIds, setSavedIds}) {
    
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
                <p>IMDB Rating: {selectedSearch.score}</p>

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
                <div className="movie-links d-flex flex-row mt-2">
                    <Button className="link-btn mr-2">Watch the Trailer</Button>
                    <Button className="link-btn">Purchase this {selectedSearch.type}</Button>
                </div>
            </div>
        </Card.Body>
    </Card>
    )
}

export default MovieModuleSearch;