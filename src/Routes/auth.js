const { Router } = require("express");

const { refreshAccessToken } = require("../Controllers/auth");

const router = Router();

router.post("/refreshToken", refreshAccessToken);

module.exports = router;
