var express = require("express");
var app = express();

app.use(express.static(__dirname + "/dist"));

app.listen(8080);
console.log("Server started on port 8080");