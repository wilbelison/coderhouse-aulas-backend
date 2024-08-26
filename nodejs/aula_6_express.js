const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// http://localhost:8080/?name=wil

app.get("/", function (req, res) {
  const { name } = req.query;
  res.send(`<h1>Hello, ${name}!</h1>`);
});

// http://localhost:8080/wil

app.get("/:name", function (req, res) {
  const { name } = req.params;
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(8080, () => {
  console.log("Server running on port 8080", "http://localhost:8080");
});