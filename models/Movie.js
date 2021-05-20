const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    actors: String,
    director: String,
    id: String,
    metascore: String,
    plot: String,
    poster: String,
    rated: String,
    runtime: String,
    title: String,
    type: String,
    year: String 
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
