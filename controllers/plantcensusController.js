const Plantcensus= require('../models/plantcensus')

exports.getPlantcensus = (req, res, next) =>{
  Plantcensus.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}