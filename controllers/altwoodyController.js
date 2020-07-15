const altWoody = require('../models/altwoody')

exports.getAltwoody = (req, res, next) =>{
  // console.log(req.body)
  altWoody.findAll({
    where:req.query,
    // raw:true,
    limit:1
  })
  .then(data => {
    res.status(200).json(data)
    // console.log(res)
  })
  .catch(err=>{console.log(err)})
}