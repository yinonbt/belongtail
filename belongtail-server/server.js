const express = require("express");
var path = require('path');
const upload = require("./upload");
const crud = require("./crud");
const cors = require("cors");

const server = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

var dir = path.join(__dirname, 'public');

server.use(express.static(dir));

server.post("/upload", upload);

// server.post("/insert", crud);

server.listen(8000, () => {
  console.log("Server started!");
});
