import React from 'react';
import {StyledFavButton } from './FavButton.styled';
import API from "../../utils/api";

const FavButton = ({ open, setOpen, setSavedMovies, id, selectedMovie }) => {

const toggleFav = () => {
  if (open == true) {
      setOpen(false)
      API.deleteMovie(id)
            .then(res => 
              loadMovies()
            )
  } else {
      setOpen(true) 
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

const loadMovies = (req,res) => {
  API.getMovies(res)
      .then(res => {
          setSavedMovies(res.data);
      })
      .catch(err => console.log(err));
}

  return (
    <StyledFavButton open={open} onClick={toggleFav}>
      <div />
      <div />
      <div />
      <div />
    </StyledFavButton>
  )
}

export default FavButton;