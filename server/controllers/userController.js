const db = require("../models");
const session = require("express-session");
const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();

router.use(cookieParser());

router.use(
  session({
    key: "userId",
    secret: "secretRoute",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

// DEFINING METHODS FOR THE USER CONTROLLER
module.exports = {
  findAllUsers: (req, res) => {
    db.User.find()
      .then(dbQuery => res.json(dbQuery))
      .catch(err => res.json(err));
  },
  findUserById: (req, res) => {
    db.User.find({ username: req.body.username })
      .then(dbQuery => {
        if (!dbQuery) {
          res.status(404).json({ error: "Wrong username" });
        } else {
          res.json(dbQuery);
        }
      })
      .catch(err => res.json(err));
  },
  findUserByUsername: (req, res) => {
    db.User.find({ username: req.body.username })
      .then(dbQuery => {
        if (!dbQuery) {
          res.status(404).json({ error: "Wrong username" });
        } else {
          res.json(dbQuery);
        }
      })
      .catch(err => res.json(err));
  },
  createUser: (req, res) => {
    console.log(req.body);
    db.User.findOne({ email: req.body.email })
      .then(dbQuery => {
        if (dbQuery) {
          res.status(404).json({ error: "Email address already exits" });
        } else {
          db.User.findOne({ username: req.body.username })
            .then(dbQuery => {
              if (dbQuery) {
                res.status(404).json({ error: "Username should be unique" });
              } else {
                db.User.create(req.body)
                  .then(dbQuery => res.json(dbQuery))
                  .catch(err => res.json(err));
              }
            })
            .catch(err => res.json(err));
        }
      })
      .catch(err => res.json(err));
  },
  updateUserById: (req, res) => {
    console.log("---------------", req.session.userId, req.body);

    db.User.findOneAndUpdate({ _id: req.session.userId }, req.body)
      .then(dbQuery => {
        console.log("INSIDE FINDONEANDUPDATE() res ", dbQuery);

        res.json(dbQuery);
      })
      .catch(err => res.json(err));
  },
  removeUserById: (req, res) => {
    db.User.findById({ _id: req.session.userId })
      .then(dbQuery => dbQuery.remove())
      .then(dbQuery => res.json(dbQuery))
      .catch(err => res.json(err));
  },
  deleteAllUsers: (req, res) => {
    db.User.remove({})
      .then(dbQuery => res.json(dbQuery))
      .catch(err => res.json(err));
  }
};
