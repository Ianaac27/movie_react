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
            <span className="close-barTwo"></span>
            <span className="close-barTwo"></span>
        </div>
        <h1 className="movie-title text-center mt-5">{selectedSearch.title}</h1>
        <Card.Body className="mod-main d-flex flex-wrap justify-content-center align-item-center m-5">
            <div className="movie-sources d-flex flex-column">
                <div className="media-content d-flex flex-column justify-content-end ml-5 mb-3">
                    <img className="movie-poster ml-5" style={{"width": "290px", "height": "350px"}} src={selectedSearch.poster} alt=""/>
                    <YoutubeEmbed embedId={embedId} />
                </div>
            </div>
            <div className="movie-info d-flex flex-column w-50 ml-5">
                <h2 className="ml-4">{selectedSearch.rated}</h2>
                <p className="ml-4 mt-2">{selectedSearch.year}</p>
                <p className="ml-4 mt-2">Runtime: {selectedSearch.runtime}</p>
                <p className="ml-4 mt-2">Starring: {selectedSearch.actors}</p>
                <p className="ml-4 mt-2">Directed by: {selectedSearch.director}</p>
                <p className="ml-4 mb-3 mt-2">{selectedSearch.plot}</p>
                <div className="media-graphics d-flex flex-row justify-content-start mt-2 ml-5">
                    <div className="rating-info d-flex flex-column justify-content-center mr-5 mt-4">
                        <p className="text-center"> IMDb rating </p>
                        <RatingBarSearch selectedSearch={selectedSearch} />
                    </div>
                    <div className="fav-functions d-flex flex-column justify-content-center mt-2 ml-4">
                        <p className="text-center mt-4 ml-1">Favorites List</p>
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
                        <Button variant="danger" className="purchase-btn btn mt-3 ml-3" size="sm" href={googleSearch} >Purchase this {selectedSearch.type}</Button>    
                    </div>  
                </div>
            </div>
           
        </Card.Body>
    </Card>
    )
}

export default MovieModuleSearch;