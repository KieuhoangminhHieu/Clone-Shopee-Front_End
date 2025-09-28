const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

// Route
app.get("/", function (req, res) {
  res.render("home");
});
app.get("/news", function (req, res) {
  res.render("home");
});
// Start server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
