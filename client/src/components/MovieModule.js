import React from "react";
// import "../App.css";


function MovieModule({selectedMovie, handleModuleLink}) {

    console.log(selectedMovie)
    
    return (
        <div className="module">
            <div className="mod-main">
                <button className="mod-close" onClick={handleModuleLink}>Close</button>
                <img className="movie-poster" src={selectedMovie.poster} alt=""/>
            </div>
        </div>
    )
}

export default MovieModule;
