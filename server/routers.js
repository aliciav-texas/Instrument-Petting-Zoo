const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models.js");

app.use(express.json());
app.use(cors());

module.exports = app;
