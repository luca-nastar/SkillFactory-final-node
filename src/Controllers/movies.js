const db = require("../config/database.config");

const getAllMovies = (req, res) => {
	const sql = "SELECT id, name, description, cover_img FROM movies";

	db.query(sql, (err, rows) => {
		if (err) {
			return res.status(500).json({ ok: false, msg: "Error del servidor" });
		}

		if (!rows) {
			return res
				.status(400)
				.json({ ok: false, msg: "No se encontraron datos" });
		}

		return res.status(200).json({ ok: true, movies: rows });
	});
};

const addMovie = (req, res) => {
	const { name, description, cover_img } = req.body;

	let coverUrl = cover_img
		? cover_img
		: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v0eQLbzT6sWelfApuYsEkYpzufl.jpg";

	const newMovie = {
		name,
		description,
		cover_img: coverUrl,
	};

	const sql = "INSERT INTO movies SET ?";

	db.query(sql, newMovie, (err, rows) => {
		if (err) {
			if (err.errno === 1062) {
				return res
					.status(400)
					.json({ ok: false, msg: "La pelicula ya existe" });
			}
			return res.status(500).json({ ok: false, msg: "Erorr del servidor." });
		}
		if (!rows) {
			return res
				.status(400)
				.json({ ok: false, msg: "No se pudo registrar la pelicula." });
		}

		return res
			.status(201)
			.json({ ok: true, msg: "Pelicula agregada correctamente." });
	});
};

const editMovie = (req, res) => {
	const { id } = req.params;
	const data = req.body;

	const sql = "UPDATE movies SET ? WHERE id = ?";

	db.query(sql, [data, id], (err, rows) => {
		if (err) {
			return res.status(500).json({ ok: false, msg: "Error del servidor" });
		}

		if (rows.affectedRows === 0) {
			return res
				.status(400)
				.json({ ok: false, msg: "No se pudo editar la pelicula" });
		}

		return res
			.status(200)
			.json({ ok: true, msg: "Pelicula editada correctamente." });
	});
};

module.exports = {
	getAllMovies,
	addMovie,
	editMovie,
};
