import React from "react";
import { Button } from "react-bootstrap";
import API from "../../utils/api"

function SaveButtonSaved({setSavedMovies, savedMovies, selectedMovie}) {

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
                if (savedMovies[i].id == selectedMovie.id) {
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
                API.saveMovie({
                    actors: selectedMovie.actors,
                    director: selectedMovie.director,
                    id: selectedMovie.id,
                    score: selectedMovie.score,
                    plot: selectedMovie.plot,
                    poster: selectedMovie.poster, 
                    rated: selectedMovie.rated,
                    runtime: selectedMovie.runtime, 
                    title: selectedMovie.title,
                    type: selectedMovie.type,
                    year: selectedMovie.year
                })
            .then(res => 
                    loadMovies()
                ).catch(err => console.log(err))
            }
        }

    return (
        <>
            <Button type="button" className="btn btn-primary ml-2" style={{height: "40px"}} onClick={checkSave}>Save</Button>
        </>
    )
}

export default SaveButtonSaved