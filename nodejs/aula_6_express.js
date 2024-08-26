const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  const { name } = req.query;
  res.send(`Hello, ${name}!`);
});

app.get("/:name", function (req, res) {
  const { name } = req.params;
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.get("/json", function (req, res) {
  res.send({ id: 0, name: "wil" });
});
app.listen(8080, () => {
  console.log("Server running on port 8080", "http://localhost:8080");
});
