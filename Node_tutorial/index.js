var http = require("http");
var request = require("request");
var express = require("express");

var app = express();

app.set("view engine", "jade");

app.route("/Node").get(function(req, res) {
  res.send("Tutorial on Node");
});

app.route("/Angular").get(function(req, res) {
  res.send("Tutorial on Angular");
});

app.route("/MongoDB").get(function(req, res) {
  res.send("Tutorial on MongoDB");
});

app.get("/", function(req, res) {
  res.render("index", { title: "Guru99", message: "Welcome" });
});

var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost";

MongoClient.connect(
  "mongodb://localhost",
  function(err, client) {
    if (err) throw err;

    var db = client.db("Employees");

    db.collection("Employees").find({}, function(findErr, result) {
      if (findErr) throw findErr;
      console.log("Connected");
      console.log(result);
      client.close();
    });
  }
);

var server = app.listen(3000, function() {});
