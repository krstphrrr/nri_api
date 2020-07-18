const express = require('express')

const altwoodyController = require('../controllers/altwoodyController')
const biomassController = require('../controllers/biomassController')
const concernController = require('../controllers/concernController')
const disturbanceController = require('../controllers/disturbanceController')
const dryweightrankController = require('../controllers/dryweightrankController')
const ecositeController = require('../controllers/ecositeController')
const esfsgController = require('../controllers/esfsgController')
const ginterceptController = require('../controllers/ginterceptController')
const gpsController = require('../controllers/gpsController')
const pastureweightsController = require('../controllers/pastureheightsController')
const pinterceptController = require('../controllers/pinterceptController')
const plantcensusController = require('../controllers/plantcensusController')
const pointController = require('../controllers/pointController')
const pointcoordinatesController = require('../controllers/pointcoordinatesController')
const practiceController = require('../controllers/practiceController')
const ptnoteController = require('../controllers/ptnoteController')
const rangehealthController = require('../controllers/rangehealthController')
const soildisagController = require('../controllers/soildisagController')
const soilhorizonController = require('../controllers/soilhorizonController')
const statenmController = require('../controllers/statenmController')
const router = express.Router()
const jwtAuthz = require('express-jwt-authz')
// const authCheck = require('../middleware/check-auth')
const authCheck = require('../middleware/check-auth')


router.get('/altwoody',authCheck, jwtAuthz(["read:altwoody"],{customScopeKey:"permissions"}), altwoodyController.getAltwoody)
router.get('/biomass', biomassController.getBiomass)
router.get('/concern', concernController.getConcern)
router.get('/disturbance', disturbanceController.getDisturbance)
router.get('/dryweightrank', dryweightrankController.getDryweightrank)
router.get('/ecosite', ecositeController.getEcosite)
router.get('/esfsg', esfsgController.getEsfsg)
router.get('/gintercept', ginterceptController.getGintercept)
router.get('/gps', gpsController.getGps)
router.get('/pastureheights', pastureweightsController.getPastureheights)
router.get('/pintercept', pinterceptController.getPintercept)
router.get('/plantcensus', plantcensusController.getPlantcensus)
router.get('/point', pointController.getPoint)
router.get('/pointcoordinates', pointcoordinatesController.getPointcoordinates)
router.get('/practice', practiceController.getPractice)
router.get('/ptnote', ptnoteController.getPtnote)
router.get('/rangehealth', rangehealthController.getRangehealth)
router.get('/soildisag', soildisagController.getSoildisag)
router.get('/soilhorizon', soilhorizonController.getSoilhorizon)
router.get('/statenm', statenmController.getStatenm)


module.exports = router 
