const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/html", function (req, res) {
  res.send("<h1>Html</h1>");
});

app.get("/json", function (req, res) {
  res.send({ id: 0, name: "wil"});
});
app.listen(8080, () => {
  console.log("Server running on port 8080", "http://localhost:8080");
});
