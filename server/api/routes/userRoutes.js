const express = require('express')
const {addUser, getUser} = require('../controllers/userControllers')
const router = express.Router()

router.get('/', getUser)

router.post('/addUser', addUser)


module.exports = router