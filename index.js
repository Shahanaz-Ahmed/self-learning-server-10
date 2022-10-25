const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Courses API Running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Dragon News Server running on port ", port);
});
