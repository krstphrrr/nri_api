const altWoody = require('../models/altwoody')

exports.getAltwoody = (req, res, next) =>{
  altWoody.findAll({
    where:req.query
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=>{console.log(err)})
}