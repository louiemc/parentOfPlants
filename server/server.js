// DEPENDENCIES
const express = require("express");
const path = require("path"); // The path module provides utilities for working with file and directory paths
const bodyParser = require("body-parser");
const routes = require("./routes");

// INSTANTIATE EXPRESS
const app = express();

const PORT = process.env.PORT || 3001;

const db = require("./models");
// console.log("page in models?", Page?);

// DEFINE MIDDLEWARE HERE
app.use(express.static("public"));
app.use(express.static("node_modules/axios/dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DEFINE ROUTES HERE
app.use(routes);

// SEND EVERY OTHER REQUEST TO THE REACT APP
// DEFINE ANY API ROUTES BEFORE THIS RUNS
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// LISTENING ON PORT
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}! or http://localhost:${PORT}`);
});