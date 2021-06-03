const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    actors: String,
    director: String,
    favorite: {
        type: Boolean,
        default: true
    },
    id: String,
    score: String,
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
