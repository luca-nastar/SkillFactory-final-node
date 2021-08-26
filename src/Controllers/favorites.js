const db = require("../config/database.config");

const getFavMovies = (req, res) => {
	const { id_user } = req.params;

	const sql =
		"SELECT m.name, m.description, m.cover_img FROM user_movie um INNER JOIN movies m ON um.id_movie = m.id WHERE um.id_user = ?";

	db.query(sql, id_user, (err, rows) => {
		if (err) {
			return res.status(500).json({ ok: false, msg: "Error del servidor" });
		}

		if (rows.length === 0) {
			return res.status(400).json({ ok: false, msg: "No hay datos" });
		}

		return res.status(200).json({ ok: true, favs: rows });
	});
};

const addFavMovie = (req, res) => {
	const { id_user } = req.params;
	const { id_movie } = req.body;

	const sqlSelect =
		"SELECT id,id_user,id_movie FROM user_movie WHERE id_user = ? AND id_movie = ? LIMIT 1";

	const sqlInsert = "INSERT INTO user_movie SET id_user = ?, id_movie = ?";

	//Verificamos si ya esta como favorita la pelicula
	db.query(sqlSelect, [id_user, id_movie], (err, rows) => {
		if (err) {
			return res.status(500).json({ ok: false, msg: "Error del servidor." });
		}

		if (rows.length !== 0) {
			return res
				.status(400)
				.json({ ok: false, msg: "La pelicula ya esta en favoritos" });
		}

		//En caso de que no este la agregamos como favorita
		db.query(sqlInsert, [id_user, id_movie], (err, rows) => {
			if (err) {
				if (err.errno === 1452) {
					return res
						.status(400)
						.json({ ok: false, msg: "No existe esa pelicula" });
				}
				return res.status(500).json({ ok: false, msg: "Error del servidor." });
			}
			if (!rows) {
				return res
					.status(400)
					.json({ ok: false, msg: "No se pudo agregar a favoritos." });
			}

			return res.status(200).json({
				ok: true,
				msg: "Pelicula agregada a favoritos correctamente.",
			});
		});
	});
};

const removeFavMovie = (req, res) => {
	const { id_user } = req.params;
	const { id_movie } = req.body;

	const sqlSelect =
		"SELECT id,id_user,id_movie FROM user_movie WHERE id_user = ? AND id_movie = ? LIMIT 1";

	const sqlDelete =
		"DELETE FROM user_movie WHERE id_user = ? AND id_movie = ? ";

	//Verificamos si esta como favorita la pelicula
	db.query(sqlSelect, [id_user, id_movie], (err, rows) => {
		if (err) {
			return res.status(500).json({ ok: false, msg: "Error del servidor." });
		}

		if (rows.length === 0) {
			return res
				.status(400)
				.json({ ok: false, msg: "La pelicula no esta en favoritos" });
		}

		//En caso de que si este, la sacamos de favoritos
		db.query(sqlDelete, [id_user, id_movie], (err, rows) => {
			if (err) {
				return res.status(500).json({ ok: false, msg: "Error del servidor." });
			}
			if (!rows) {
				return res
					.status(400)
					.json({ ok: false, msg: "No se pudo agregar a favoritos." });
			}

			return res.status(200).json({
				ok: true,
				msg: "Pelicula removida de favoritos.",
			});
		});
	});
};

module.exports = {
	getFavMovies,
	addFavMovie,
	removeFavMovie,
};
