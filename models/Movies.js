const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Title: String,
    Year: String,
    Rated: String,
    Type: String,
    Runtime: String,
    Director: [String],
    Actors: [String],
    Plot: String,
    Metascore: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;