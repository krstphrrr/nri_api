const Biomass = require('../models/biomass')

exports.getBiomass = (req, res, next) =>{
  Biomass.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}