const express = require("express");
const path = require("path");
const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");