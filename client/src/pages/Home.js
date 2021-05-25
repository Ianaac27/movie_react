import React, {useState} from "react";
import MovieResults from "../components/MovieResults";
import SavedMovies from "../components/SavedMovies";
import Search from "../components/Search";

function Home () {
  const [movies, setMovies] = useState([]);
  const [apiKey, setApiKey] = useState("a3d98e34")

  return ( 
      <>
      <Search setMovies={setMovies} apiKey={apiKey}/>
      <div className="row">
            <MovieResults movies={movies} apiKey={apiKey}/>
      </div>
      <div className="row">
            <SavedMovies />
      </div>
      </>
  );

}

export default Home;