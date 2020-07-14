const Gintercept = require('../models/gintercept')

exports.getGintercept = (req, res, next) =>{
  Gintercept.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}