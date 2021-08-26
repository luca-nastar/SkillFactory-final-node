const { Router } = require("express");
const { getAllMovies, addMovie, editMovie } = require("../Controllers/movies");
const {
	addMovieValidator,
	editMovieValidator,
} = require("../Middlewares/moviesValidator");

const router = Router();

router.get("/movies", getAllMovies);
router.post("/movies", [addMovieValidator], addMovie);
router.put("/movies/:id", [editMovieValidator], editMovie);

module.exports = router;
