import axios from "axios";
import React, {useEffect} from "react";
import { Button } from "react-bootstrap";
import API from "../utils/api"

function SaveButton({apiKey, movie, setSavedMovies}) {

    const loadMovies = (req,res) => {
        API.getMovies(res)
            .then(res => {
                setSavedMovies(res.data);
                console.log(res.data);      
            })
            .catch(err => console.log(err));
          }
  
    const handleSave = event => {
        event.preventDefault();
        console.log(movie.imdbID)
        axios.get("http://www.omdbapi.com/?i=" + movie.imdbID + "&apikey=" + apiKey)
            .then(({data}) => {
                console.log(data)
                API.saveMovie({
                    actors: data.Actors,
                    director: data.Director,
                    id: data.imdbID,
                    metascore: data.Metascore,
                    plot: data.Plot,
                    poster: data.Poster, 
                    rated: data.Rated,
                    runtime: data.Runtime, 
                    title: data.Title,
                    type: data.Type,
                    year: data.Year
                }) .then(res => 
                    loadMovies()
                ).catch(err => console.log(err))
            })
        }

    return (
        <>
            <Button type="button" className="btn btn-primary ml-2" style={{height: "40px"}} onClick={handleSave}>Save</Button>
        </>
    )
}

export default SaveButton