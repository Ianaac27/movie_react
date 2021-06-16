import axios from "axios";

const API = {

  // Gets all movies
  getMovies: function() {
    return axios.get("/api/movies");
  },
  // Saves a movie to the database
  saveMovie: function(movieData) {
    return axios.post("/api/movies", movieData);
  },
   // Deletes the movie with the given id
   deleteMovie: function(id) {
    return axios.delete("/api/movies/" + id);
  }

};

export default API;