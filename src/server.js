const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//Load Routes
const usersRoutes = require("./Routes/users");
const moviesRoutes = require("./Routes/movies");
const favsRoutes = require("./Routes/favsMovies");
const refreshTokenRoutes = require("./Routes/auth");

//Basic Routes
app.use("/", usersRoutes);
app.use("/", moviesRoutes);
app.use("/", favsRoutes);
app.use("/", refreshTokenRoutes);

module.exports = app;
