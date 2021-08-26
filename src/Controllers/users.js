const bcrypt = require("bcrypt");
const db = require("../config/database.config");
const { createAccessToken, createRefreshToken } = require("../Services/jwt");

const login = (req, res) => {
	const { username, password } = req.body;

	const sql =
		"SELECT id, full_name, username, password, role FROM users WHERE username = ?";
	db.query(sql, username, (err, user) => {
		if (err) {
			return res.status(401).send(err);
		}

		if (!user) {
			return res
				.status(401)
				.json({ ok: false, msg: "Usuario y/o contraseña incorrecta." });
		}

		bcrypt.compare(password, user[0].password, (err, check) => {
			if (err) {
				return res
					.status(500)
					.json({ ok: false, msg: "Error del servidor", err });
			}

			if (!check) {
				return res
					.status(401)
					.json({ ok: false, msg: "Usuario y/o contraseña incorrecta." });
			}

			return res.status(200).json({
				ok: true,
				accessToken: createAccessToken(user[0]),
				refreshToken: createRefreshToken(user[0]),
			});
		});
	});
};

const addUser = (req, res) => {
	const { full_name, username, password, role } = req.body;

	const newUser = {
		full_name,
		username,
		password: bcrypt.hashSync(password, 10),
		role,
	};

	const sql = "INSERT INTO users SET ?";

	db.query(sql, newUser, (err, rows) => {
		if (err) {
			if (err.errno === 1062) {
				return res.status(400).json({ ok: false, msg: "El usuario ya existe" });
			}
			return res.status(500).json({ ok: false, msg: "Erorr del servidor." });
		}
		if (!rows) {
			return res
				.status(400)
				.json({ ok: false, msg: "No se pudo registrar al usuario." });
		}

		return res
			.status(201)
			.json({ ok: true, msg: "Usuario creado correctamente." });
	});
};

module.exports = {
	login,
	addUser,
};
