const Soilhorizon = require('../models/soilhorizon')

exports.getSoilhorizon = (req, res, next) =>{
  Soilhorizon.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}