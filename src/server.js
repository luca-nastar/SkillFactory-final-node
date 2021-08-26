const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Load Routes
const usersRoutes = require("./Routes/users");

//Basic Routes
app.use("/", usersRoutes);

module.exports = app;
