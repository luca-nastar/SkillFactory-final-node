const { Router } = require("express");
const {
	getFavMovies,
	addFavMovie,
	removeFavMovie,
} = require("../Controllers/favorites");

const router = Router();

router.get("/favs/:id", getFavMovies);
router.post("/favs", addFavMovie);
router.delete("/favs", removeFavMovie);

module.exports = router;
