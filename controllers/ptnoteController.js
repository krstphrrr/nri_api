const Ptnote = require('../models/ptnote')

exports.getPtnote = (req, res, next) =>{
  Ptnote.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}