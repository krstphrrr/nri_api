const Rangehealth = require('../models/rangehealth')

exports.getRangehealth = (req, res, next) =>{
  Rangehealth.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}