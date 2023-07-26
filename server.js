const express = require("express");
const server = express();

const port = 3000;

var engines = require("consolidate");

// server.use(express.static(path.join(__dirname, 'public')));

server.set("views", __dirname + "/views");
server.engine("html", engines.mustache);
server.set("view engine", "html");

server.get("/", (req, res) => {
  let html = "./title.html";
  res.render(html);
});

server.get("/old", (req, res) => {
  res.redirect(301, "/new");
});

server.get("/new", (req, res) => {
  res.render("./title.html");
});

server.get("/exercises", (req, res) => {
  res.render("./exercises.html");
});

server.get("/yoga", (req, res) => {
  res.render("./yoga.html");
});

server.get("/index", (req, res) => {
  res.render("./index.html");
});

server.listen(port, (err) => {
  if (err) {
    console.log("There was a problem", err);
    return;
  }
  console.log(`Listening on port ${port}`);
});

console.log("Search for some Exercises! :)");

// const fs = require("fs");
// const csv = require('csvtojson');
// const{Parser} = require('json2csv');
