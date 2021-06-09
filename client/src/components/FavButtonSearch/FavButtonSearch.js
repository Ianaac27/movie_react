
import axios from "axios";
import React from 'react';
import {StyledFavButtonSearch } from './FavButtonSearch.styled';
import API from "../../utils/api";

const FavButtonSearch = ({apiKey, open, setOpen, setSavedMovies, savedMovies, selectedSearch, savedIds, setSavedIds }) => {

const toggleFav = () => {
  if (open == true) {
      setOpen(false)

      const removeId = savedIds.indexOf(selectedSearch.id);
      if (removeId > -1) {
        savedIds.splice(removeId, 1);
      }

      for (var i = 0; i < savedMovies.length; i++) {
        if (savedMovies[i].id === selectedSearch.id) {
            const id = savedMovies[i]._id
            API.deleteMovie(id)
                    .then(res => loadMovies()
            )}
        }
  } else {
      setOpen(true) 

      const addId = savedIds.concat(selectedSearch.id);
      setSavedIds(addId)

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

const loadMovies = (req,res) => {
  API.getMovies(res)
      .then(res => {
          setSavedMovies(res.data);
      })
      .catch(err => console.log(err));
}

  return (
    <StyledFavButtonSearch open={open} onClick={toggleFav}>
      <div />
      <div />
      <div />
      <div />
    </StyledFavButtonSearch>
  )
}

export default FavButtonSearch;