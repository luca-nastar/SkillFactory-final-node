const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Load Routes
const usersRoutes = require("./Routes/users");
const moviesRoutes = require("./Routes/movies");
const favsRoutes = require("./Routes/favsMovies");

//Basic Routes
app.use("/", usersRoutes);
app.use("/", moviesRoutes);
app.use("/", favsRoutes);

module.exports = app;
