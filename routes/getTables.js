const express = require('express')

const altwoodyController = require('../controllers/altwoodyController')

const router = express.Router()

router.get('/altwoody', altwoodyController.getAltwoody)

module.exports = router 
