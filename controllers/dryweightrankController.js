const Dryweightrank = require('../models/dryweightrank')

exports.getDryweightrank = (req, res, next) =>{
  Dryweightrank.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}