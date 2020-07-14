const Esfsg = require('../models/esfsg')

exports.getEsfsg = (req, res, next) =>{
  Esfsg.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}