const express = require('express')
const router = express.Router()
const config = require("../config/connection");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const bcrypt = require("bcrypt");
const saltRounds = 10;

//* connection
let conn = config.connection;


// CHECK IF USER SESSION EXIST
const authUser = (req, res, next) => {
  if (req.session.user) {
      res.status(200).json({ loggedIn: true, user: req.session.user });
    } else {
      res.status(400).json({ loggedIn: false });
    }
}

  
module.exports = {
    authUser
}