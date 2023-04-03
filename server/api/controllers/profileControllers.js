const express = require('express')
const { sessionMiddleware } = require("../controllers/session")
const router = express.Router()
const config = require("../config/connection");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const app = express()

// SET SESSION
app.use(sessionMiddleware);

//* connection
let conn = config.connection;

const addExperience = (req, res, next) => {

    const {userId, experience} = req.body

    if(experience !== null){
        conn.query("INSERT INTO `user_profile`(`user_id`, `experience`) VALUES (?, ?)", [userId, experience], (err, result)=>{
            if (err) {
                res.status(401).json({err});
            }

            if (result) {
                res.status(200).json({message: "Success"});
            }
        })
    }

}

const addGoal = (req, res, next) => {

    const {userId, goal} = req.body

    if(experience !== null){
        conn.query("UPDATE `user_profile` SET `goal` = ? WHERE `user_id` = ?", [goal, userId], (err, result)=>{
            if (err) {
                res.status(401).json({err});
            }

            if (result) {
                res.status(200).json({message: "Success"});
            }
        })
    }
    
}
const addWorkPreference = (req, res, next) => {

    const {userId, goal} = req.body

    if(experience !== null){
        conn.query("UPDATE `user_profile` SET `goal` = ? WHERE `user_id` = ?", [goal, userId], (err, result)=>{
            if (err) {
                res.status(401).json({err});
            }

            if (result) {
                res.status(200).json({message: "Success"});
            }
        })
    }
    
}

module.exports = {
    addExperience,
    addGoal,
    addWorkPreference
}