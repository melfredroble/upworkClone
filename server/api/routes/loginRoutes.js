const express = require('express')
const {authUser} = require('../controllers/loginControllers')
const router = express.Router()

router.get('/', authUser)


module.exports = router
