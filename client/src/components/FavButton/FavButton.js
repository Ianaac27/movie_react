import React from 'react';
import {StyledFavButton } from './FavButton.styled';
import { store } from 'react-notifications-component';
import 'animate.css/animate.css';
import API from "../../utils/api";

const FavButton = ({ open, setOpen, setSavedMovies, id, selectedMovie, savedIds, setSavedIds }) => {

const toggleFav = () => {
  if (open == true) {
      setOpen(false)
      // handleDeleteNotification()
      API.deleteMovie(id)
            .then(res => 
              loadMovies()
            )
  } else {
      setOpen(true)
      // handleSavedNotification() 
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

        movieList.forEach(function(movie) {
            let {id} = movie
            movieArr.push(id)

            setSavedIds(movieArr)
            setSavedMovies(movieList);
        })
      })
      .catch(err => console.log(err));
}

// const handleSavedNotification = () => {
//   store.addNotification({
//       message: selectedMovie.title + " has been saved to your favorites",
//       type: "success",
//       insert: "bottom",
//       container: "bottom-center",
//       animationIn: ["animate__animated", "animate__fadeIn"],
//       animationOut: ["animate__animated", "animate__fadeOut"],
//       dismiss: {
//           duration: 2000,
//           pauseOnHover: true,
//           onScreen: true,
//           click: true,
//           touch: true
//       }
//   });
// }

// const handleDeleteNotification = () => {
//   store.addNotification({
//       message: selectedMovie.title + " has been removed from your favorites",
//       type: "warning",
//       insert: "bottom",
//       container: "bottom-center",
//       animationIn: ["animate__animated", "animate__fadeIn"],
//       animationOut: ["animate__animated", "animate__fadeOut"],
//       dismiss: {
//           duration: 2000,
//           onScreen: true,
//           pauseOnHover: true,
//           click: true,
//           touch: true
//       }
//   });
// }

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