import React, {useState, useEffect} from "react";
import MovieModule from "../components/MovieModule.js";
import MovieResults from "../components/MovieResults";
import SavedMovies from "../components/SavedMovies";
import Search from "../components/Search";
import API from "../utils/api";

function Home () {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [apiKey, setApiKey] = useState("a3d98e34")

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
      <Search setMovies={setMovies} apiKey={apiKey}/>
      <div className="row">
            <MovieResults movies={movies} apiKey={apiKey} setSavedMovies={setSavedMovies}/>
      </div>
      <div className="row">
            <SavedMovies savedMovies={savedMovies} setSavedMovies={setSavedMovies} />
      </div>
      </>
  );

}

export default Home;