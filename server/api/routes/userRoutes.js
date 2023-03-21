const express = require('express')
const {addUser} = require('../controllers/userControllers')
const router = express.Router()

router.get('/', )

router.post('/addUser', addUser)

router.put('/editUser', )

router.delete('/deleteUser', )

module.exports = router