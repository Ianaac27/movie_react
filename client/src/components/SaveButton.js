import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import API from "../utils/api"

function SaveButton({apiKey, setSavedMovies, savedMovies, selectedSearch}) {

    const loadMovies = (req,res) => {
        API.getMovies(res)
            .then(res => {
                setSavedMovies(res.data);
                console.log(res.data);      
            })
            .catch(err => console.log(err));
          }
  
    const checkSave = event => {
        event.preventDefault();
        let checker = true;

        if (savedMovies.length == 0) {
            checker = false;
        }
        else {
            for (var i = 0; i < savedMovies.length; i++) {
                if (savedMovies[i].id == selectedSearch.id) {
                    checker = true;
                } 
                else {
                    checker = false;
                }
            }
        }

        handleSave(checker);
    }

    const handleSave = checker => {
        if (checker == true) {
            console.log("This movie is already saved")
            return;
        } else {
            axios.get("http://www.omdbapi.com/?i=" + selectedSearch.id + "&apikey=" + apiKey)
            .then(({data}) => {
                console.log(data)
                API.saveMovie({
                    actors: data.Actors,
                    director: data.Director,
                    id: data.imdbID,
                    score: data.imdbRating,
                    plot: data.Plot,
                    poster: data.Poster, 
                    rated: data.Rated,
                    runtime: data.Runtime, 
                    title: data.Title,
                    type: data.Type,
                    year: data.Year
                })
            .then(res => 
                    loadMovies()
                ).catch(err => console.log(err))
            })
        }
    }

    return (
        <>
            <Button type="button" className="btn btn-primary ml-2" style={{height: "40px"}} onClick={checkSave}>Save</Button>
        </>
    )
}

export default SaveButton