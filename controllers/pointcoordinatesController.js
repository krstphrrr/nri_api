const Pointcoordinates = require('../models/pointcoordinates')

exports.getPointcoordinates = (req, res, next) =>{
  Pointcoordinates.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}