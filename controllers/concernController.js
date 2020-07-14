const Concern = require('../models/concern')

exports.getConcern = (req, res, next) =>{
  Concern.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}