const http = require("https");

const server = http.createServer((request, response) => {
  response.end("Hello world!");
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
