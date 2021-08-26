const { decodeToken } = require("../Services/jwt");

exports.idValidation = (req, res, next) => {
	const token = req.headers.authorization.replace(/['"]+/g, "");

	const { id } = decodeToken(token);

	req.params.id_user = id;

	next();
};
