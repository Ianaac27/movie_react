import React, { useEffect } from 'react';
import {StyledFavButton } from './FavButton.styled';
import { store } from 'react-notifications-component';
import 'animate.css/animate.css';
import API from "../../utils/api";

const FavButton = ({ open, setOpen, setSavedMovies, id, selectedMovie, savedIds, setSavedIds }) => {

const toggleFav = () => {
  if (open == true) {
      setOpen(false)

      const removeId = savedIds.indexOf(selectedMovie.id);
        if (removeId > -1) {
          savedIds.splice(removeId, 1);
        }

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
        const movieList = res.data
        const movieArr = []

        if (movieList.length == 0) {
          setSavedMovies(movieList);
      } else {
        movieList.forEach(function(movie) {
          let {id} = movie
          movieArr.push(id)

          setSavedIds(movieArr)
          setSavedMovies(movieList);
        })
      }
    }).catch(err => console.log(err));
}

  return (
    <StyledFavButton className="fav-button ml-5" open={open} onClick={toggleFav}>
      <div />
      <div />
      <div />
      <div />
    </StyledFavButton>
  )
}

export default FavButton;