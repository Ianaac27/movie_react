import React, {useState, useEffect} from "react";
import SearchResults from "../components/SearchResults";
import SavedMovies from "../components/SavedMovies";
import Search from "../components/Search";
import API from "../utils/api";

function Home () {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [apiKey, setApiKey] = useState("a3d98e34")
  const [open, setOpen] = useState(false);

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
            <SearchResults savedMovies={savedMovies} movies={movies} apiKey={apiKey} setSavedMovies={setSavedMovies} open={open} setOpen={setOpen}/>
      </div>
      <div className="row">
            <SavedMovies savedMovies={savedMovies} setSavedMovies={setSavedMovies} open={open} setOpen={setOpen}/>
      </div>
      </>
  );

}

export default Home;