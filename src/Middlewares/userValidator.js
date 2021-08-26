exports.loginValidator = (req, res, next) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res
			.status(401)
			.json({ ok: false, msg: "Usuario y/o Contraseña incorrecta." });
	}
	if (username.length < 5 || password.length < 5) {
		return res
			.status(401)
			.json({ ok: false, msg: "Usuario y/o Contraseña incorrecta." });
	}

	next();
};

exports.registerValidatior = (req, res, next) => {
	const { full_name, username, password, role } = req.body;

	const validRoles = ["ADMIN_ROLE", "USER_ROLE"];

	if (!full_name || !username || !password || !role) {
		return res
			.status(400)
			.json({ ok: false, msg: "Todos los campos son requeridos" });
	}

	if (typeof full_name !== "string" || typeof username !== "string") {
		return res
			.status(400)
			.json({ ok: false, msg: "Verifique los datos e intente nuevamente" });
	}
	if (username.length < 5 || password.length < 5) {
		return res.status(400).json({
			ok: false,
			msg: "El usuario y la contraseña deben tener por lo menos 5 caracteres",
		});
	}
	if (!validRoles.includes(role)) {
		return res
			.status(400)
			.json({ ok: false, msg: "El rol asignado no es valido" });
	}

	next();
};
