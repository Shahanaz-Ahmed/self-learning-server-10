const express = require("express");
const app = express();
//cors setup
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

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_course = courses.filter((c) => c.category_id === id);
  res.send(category_course);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((c) => c._id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("Dragon News Server running on port ", port);
});
