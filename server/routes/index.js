const express = require("express");
// const path = require("path");
const router = require("express").Router();
const nodemailer = require("nodemailer");
const creds = require("../config/config");

let transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n message: ${message}`;

  let mail = {
    from: name,
    to: 'profileplantnyc@gmail.com',
    subject: 'New message from contact form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})
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

