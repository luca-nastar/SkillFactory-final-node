const dayjs = require("dayjs");
const db = require("../config/database.config");
const jwt = require("../Services/jwt");

const checkExpireToken = (token) => {
	const { exp } = jwt.decodeToken(token);

	const currentDate = dayjs().unix();

	return currentDate > exp ? true : false;
};

const refreshAccessToken = (req, res) => {
	const { refreshToken } = req.body;
	const isTokenExpired = checkExpireToken(refreshToken);

	if (isTokenExpired) {
		return res.status(400).json({ ok: false, msg: "El Token ha expirado." });
	}

	const { id } = jwt.decodeToken(refreshToken);

	db.query(
		"SELECT id, full_name, username, password, role FROM users WHERE id = ?",
		id,
		(err, user) => {
			if (err) {
				return res.status(500).json({ ok: false, msg: "Error del servidor" });
			}
			if (user.length === 0) {
				return res
					.status(404)
					.json({ ok: false, msg: "Usuario no encontrado" });
			}

			return res.status(200).json({
				ok: true,
				accessToken: jwt.createAccessToken(user),
				refreshToken,
			});
		}
	);
};

module.exports = { refreshAccessToken };
