const Ecosite = require('../models/ecosite')

exports.getEcosite = (req, res, next) =>{
  Ecosite.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}