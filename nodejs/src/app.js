const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Hello World!");
});
app.listen(8080, () => {
  console.log("Server running on port 8080", "http://localhost:8080");
});
