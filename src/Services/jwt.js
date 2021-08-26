const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const createAccessToken = (data) => {
	const { id, full_name, username, role } = data;

	const payload = {
		id,
		full_name,
		username,
		role,
	};

	return jwt.sign(payload, secretKey, { expiresIn: "15m" });
};

const createRefreshToken = (data) => {
	const { id, full_name, username, role } = data;

	const payload = {
		id,
		full_name,
		username,
		role,
	};

	return jwt.sign(payload, secretKey, { expiresIn: "12h" });
};

const decodeToken = (token) => {
	return jwt.verify(token, secretKey);
};

module.exports = {
	createAccessToken,
	createRefreshToken,
	decodeToken,
};
