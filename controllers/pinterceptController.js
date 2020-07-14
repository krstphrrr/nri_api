const Pintercept = require('../models/pintercept')

exports.getPintercept = (req, res, next) =>{
  Pintercept.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}