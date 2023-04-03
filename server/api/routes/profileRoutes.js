const express = require('express')
const {addExperience, addGoal, addWorkPreference} = require('../controllers/profileControllers')
const router = express.Router()

// router.get('/', getUser)

router.post('/addExperience', addExperience)
router.post('/addGoal', addGoal)
router.post('/addWorkPreference', addWorkPreference)


module.exports = router