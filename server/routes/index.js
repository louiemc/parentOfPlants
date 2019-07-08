const express = require("express");
// const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");

// const app = express();

// const db = require("./models");
// console.log("page in models?", Page?);

// DEFINE ROUTES
// API Routes
// router.use("/api", apiRoutes);

// IF NO API ROUTES ARE HIT, SEND THE REACT APP
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"))
// });

// OTHER ROUTES
// HomePage Route
// app.post("/api/users", (req, res) => {
//   let name = req.body.name;
// })

// GET HOME PAGE
router.get('/', (req, res, next) => {
  res.json("Homepage");
});


module.exports = router;

