exports.addMovieValidator = (req, res, next) => {
	const { name, description, cover_img } = req.body;

	const urlRegexp =
		/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

	if (!name || !description) {
		return res.status(400).json({ ok: false, msg: "Faltan datos requeridos" });
	}

	if (cover_img && !urlRegexp.test(cover_img)) {
		return res
			.status(400)
			.json({ ok: false, msg: "La URL ingresada no es valida" });
	}

	next();
};

exports.editMovieValidator = (req, res, next) => {
	const { name, description, cover_img } = req.body;

	const urlRegexp =
		/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

	if (!name && !description && !cover_img) {
		return res.status(400).json({ ok: false, msg: "Faltan datos" });
	}

	if (cover_img && !urlRegexp.test(cover_img)) {
		return res
			.status(400)
			.json({ ok: false, msg: "La URL ingresada no es valida" });
	}

	next();
};
