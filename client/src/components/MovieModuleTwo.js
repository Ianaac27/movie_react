import React from "react";
import { Card, Button } from "react-bootstrap";
import SaveButton from "./SaveButton";
import DeleteButtonTwo from "./DeleteButtonTwo";
import "../App.css";

function MovieModuleTwo({selectedSearch, handleModuleLink,
    savedMovies, apiKey, setSavedMovies
}) {

    console.log(savedMovies)
    
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

                <SaveButton 
                    savedMovies={savedMovies} 
                    selectedSearch={selectedSearch} 
                    apiKey={apiKey} 
                    setSavedMovies={setSavedMovies}
                />
                <DeleteButtonTwo savedMovies={savedMovies} selectedSearch={selectedSearch} setSavedMovies={setSavedMovies} />

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

export default MovieModuleTwo;