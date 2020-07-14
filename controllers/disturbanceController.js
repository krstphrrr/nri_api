const Disturbance = require('../models/disturbance')

exports.getDisturbance = (req, res, next) =>{
  Disturbance.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}