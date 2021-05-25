import React, {useState, useEffect} from "react";
// import { Card } from "react-bootstrap";
// import "../styles/card.css";
// import DeleteButton from "./DeleteButton";
import API from "../utils/api";

function SavedMovies () {

    const [savedMovies, setSavedMovies] = useState([]);

    console.log(savedMovies);

    useEffect(() => {
        loadMovies()
      }, [])

    const loadMovies = (req,res) => {
        API.getMovies(res)
            .then(res => {
                setSavedMovies(res.data);
                console.log(res.data);      
            })
            .catch(err => console.log(err));
    }

    return (
        <>
        {savedMovies.length > 0 ? savedMovies.map((movie, index)=>
        <div className="w-25 h-25">
                <img  src={movie.poster} alt={movie.title}/>
        </div>
        ): <h3 className="fs-1 text-white text-center mt-5">You have no saved movies</h3>}  
        </>
)
}

export default SavedMovies;