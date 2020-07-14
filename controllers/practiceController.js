const Practice = require('../models/practice')

exports.getPractice = (req, res, next) =>{
  Practice.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}