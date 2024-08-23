

import express, { urlencoded } from "express";
// import ProductManager from "../ProductManager.js";

const app = express();

app.use(urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.redirect("/products?limit=10");
});

app.get("/products", function (req, res) {
  const limit = req.query.find("limit");
  res.send(``);
});

app.get("/products/:pid", function (req, res) {
  res.send(`${pid}`);
});

app.listen(8080, () => {
  console.log("Server running on port 8080", "http://localhost:8080");
});
