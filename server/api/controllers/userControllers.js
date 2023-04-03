const express = require('express')
const { sessionMiddleware } = require("../controllers/session")
const router = express.Router()
const config = require("../config/connection");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const bcrypt = require("bcrypt");
const app = express()

// SET SESSION
app.use(sessionMiddleware);
const saltRounds = 10;


//* connection
let conn = config.connection;

const getUser = (req, res, next) => {
  conn.query("SELECT * FROM users ORDER BY user_id DESC", (err, result)=> {
    if(result){
      res.status(200).json(result)
    } else {
      res.status(400).json(err)
    }
  })
}

const addUser = (req, res, next) => {

    const {
      firstName, 
      lastName, 
      email,
      password,
      country
    } = req.body

    let userType = 2

    if(!userType || !firstName || !lastName || !email){
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
                res.status(400).json({ message: "Email already exist!"});
              } else {
                bcrypt.hash(password, saltRounds, (error, hash) => {
                  if (error) {
                    res.status(400).json(error);
                  }
        
                  conn.query(
                    "INSERT INTO `users`(`firstname`, `lastname`, `email`, `password`, `user_type`, `country`) VALUES (?,?,?,?,?,?)",
                    [firstName, lastName, email, hash, userType, country.value],
                    (err, result) => {
                      if (err) {
                        res.status(400).json({err});
                      }
        
                      if (result) {

                        conn.query("SELECT * FROM users WHERE email = ?", [email], (error, response)=>{
                          req.session.user =  response[0] ;
                        
                          res.status(200).send({
                            message: "User added succesfully!",
                            status: "success",
                            user: req.session.user
                          });

                        })
                      }
                    }
                  );
                });
              }
            }
        );
    }
}



module.exports = {
    addUser,
    getUser
}