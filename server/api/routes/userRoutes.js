const express = require('express')
const {addUser} = require('../controllers/userControllers')
const router = express.Router()
// const bodyParser = require("body-parser");
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

router.get('/', (req, res)=>{
    res.json("Hello")
})

router.post('/addUser', addUser)

router.put('/editUser', )

router.delete('/deleteUser', )

module.exports = router