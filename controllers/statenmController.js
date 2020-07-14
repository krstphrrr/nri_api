const Statenm = require('../models/statenm')

exports.getStatenm = (req, res, next) =>{
  Statenm.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}