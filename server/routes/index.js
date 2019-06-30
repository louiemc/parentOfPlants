const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const db = require("./models");
// console.log("page in models?", Page?);

// API Routes
router.use("/api", apiRoutes);

// IF NO API ROUTES ARE HIT, SEND THE REACT APP
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"))
});

module.exports = router;

