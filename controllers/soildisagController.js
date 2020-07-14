const Soildisag = require('../models/soildisag')

exports.getSoildisag = (req, res, next) =>{
  Soildisag.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}