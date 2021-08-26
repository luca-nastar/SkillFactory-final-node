const { Router } = require("express");
const { getAllMovies, addMovie, editMovie } = require("../Controllers/movies");
const { isAuthenticated, isAdmin } = require("../Middlewares/authValidator");
const {
	addMovieValidator,
	editMovieValidator,
} = require("../Middlewares/moviesValidator");

const router = Router();

router.get("/movies", getAllMovies);
router.post("/movies", [isAuthenticated, isAdmin, addMovieValidator], addMovie);
router.put(
	"/movies/:id",
	[isAuthenticated, isAdmin, editMovieValidator],
	editMovie
);

module.exports = router;
