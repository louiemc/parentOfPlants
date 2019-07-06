// DEPENDENCIES
const express = require("express");
const path = require("path"); // The path module provides utilities for working with file and directory paths
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// ROUTES
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const logRouter = require("./routes/log");
const plantRouter = require("./routes/plants");

// INITIALIZE EXPRESS
const app = express();

// DEFINE PORT
const PORT = process.env.PORT || 3001;

//  MIDDLEWARE 
app.use(logger("dev"));
app.use(cookieParser);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DEFINE ROUTES HERE
// app.use(routes);

// SEND EVERY OTHER REQUEST TO THE REACT APP
// DEFINE ANY API ROUTES BEFORE THIS RUNS
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// LISTENING ON PORT
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}! or http://localhost:${PORT}`);
});