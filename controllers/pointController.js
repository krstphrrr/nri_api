const Point = require('../models/point')

exports.getPoint = (req, res, next) =>{
  Point.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}