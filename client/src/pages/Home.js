import React, {useState} from "react";
import MovieResults from "../components/MovieResults";
import Search from "../components/Search";

function Home () {
  const [movies, setMovies] = useState([]);

  return ( 
      <>
      <Search setMovies={setMovies}/>
      <MovieResults movies={movies}/>
      </>
  );

}

export default Home;