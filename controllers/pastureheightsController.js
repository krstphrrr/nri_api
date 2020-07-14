const Pastureheights = require('../models/pastureheights')

exports.getPastureheights = (req, res, next) =>{
  Pastureheights.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}