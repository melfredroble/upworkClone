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

const getUser = (req, res) => {
    
}

const addUser = (req, res, next) => {

    const {
        fname, 
        lname, 
        email,
        password
    } = req.body

    if(!userType || !fname || !lname || !email){
        res.status(400)
        throw new Error("Please add something!")
    } else {
        conn.query(
            "SELECT * FROM `users` WHERE `email` = ?",
            email,
            (err, result) => {
              if (err) {
                res.status(400).json(err);
              }
        
              if (result.length > 0) {
                res.send({ message: "Email already exist!", status: "failed" });
              } else {
                bcrypt.hash(newPin, saltRounds, (error, hash) => {
                  if (error) {
                    res.status(400).json(error);
                  }
        
                  conn.query(
                    "INSERT INTO `users`(`name`, `email`, `password`, `office_id`, `role`) VALUES (?,?,?,?,?)",
                    [fullName, email, hash, office, role],
                    (err, result) => {
                      if (err) {
                        res.status(400).json(err);
                      }
        
                      if (result) {
                        res.send({
                          message: "User added succesfully!",
                          status: "success",
                        });
                      }
                    }
                  );
                });
              }
            }
        );
    }

    res.status(200).json({
        firstName: fname,
        lastName: lname,
        userType,
        email
    })
}



module.exports = {
    addUser
}