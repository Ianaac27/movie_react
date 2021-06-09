import React, {useState, useEffect} from "react";
import SearchResults from "../components/SearchResults";
import SavedMovies from "../components/SavedMovies";
import Search from "../components/Search";
import API from "../utils/api";

function Home () {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const [apiKey, setApiKey] = useState("a3d98e34")
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadMovies()
  }, [])

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

  return ( 
      <>
      <Search setMovies={setMovies} apiKey={apiKey}/>
      <div className="row">
            <SearchResults 
              savedMovies={savedMovies} 
              movies={movies} 
              apiKey={apiKey} 
              setSavedMovies={setSavedMovies} 
              open={open} 
              setOpen={setOpen}
              savedIds={savedIds}
              setSavedIds={setSavedIds}/>
      </div>
      <div className="row">
            <SavedMovies 
              savedMovies={savedMovies} 
              setSavedMovies={setSavedMovies} 
              open={open} 
              setOpen={setOpen}
              savedIds={savedIds}
              setSavedIds={setSavedIds}/>
      </div>
      </>
  );

}

export default Home;