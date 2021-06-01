import React from "react";
import { Button } from "react-bootstrap";
import API from "../utils/api";

function DeleteButton({setSavedMovies, id}) {

    // I need to bring in the savedMovies state through ModuleTwo, and prop to delete button. If this is tricky, I may need to create a second delete button component

    const deleteMovie = (id) => {
        console.log(id)
        API.deleteMovie(id)
            .then(res => loadMovies()
            )};

    const loadMovies = (req,res) => {
        API.getMovies(res)
            .then(res => {
                setSavedMovies(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <Button type="button" className="btn btn-primary ml-2" style={{height: "40px"}} onClick={() => deleteMovie(id)}>Delete</Button>
    )
}

export default DeleteButton