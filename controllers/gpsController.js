const Gps = require('../models/gps')

exports.getGps = (req, res, next) =>{
  Gps.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}