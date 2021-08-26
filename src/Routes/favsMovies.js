const { Router } = require("express");
const {
	getFavMovies,
	addFavMovie,
	removeFavMovie,
} = require("../Controllers/favorites");
const { isAuthenticated } = require("../Middlewares/authValidator");
const { idValidation } = require("../Middlewares/favsValidatior");

const router = Router();

router.get("/favs", [isAuthenticated, idValidation], getFavMovies);
router.post("/favs", [isAuthenticated, idValidation], addFavMovie);
router.delete("/favs", [isAuthenticated, idValidation], removeFavMovie);

module.exports = router;
