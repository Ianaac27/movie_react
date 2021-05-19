import React, {useState} from "react";
import MovieResults from "../components/MovieResults";
import Search from "../components/Search";

function Home () {
  const [movies, setMovies] = useState([]);

  return ( 
      <>
      <Search setMovies={setMovies}/>
      <div className="row">
            <MovieResults movies={movies}/>
      </div>
      </>
  );

}

export default Home;