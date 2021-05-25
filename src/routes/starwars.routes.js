const { Router } = require('express')
const router = Router()

const starwars_controllers = require('../controllers/starwars.controller.js')

router.get('/', starwars_controllers.getdata)

module.exports = router

