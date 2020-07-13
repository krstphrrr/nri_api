if(process.env.NODE_ENV!=='production'){
  require('dotenv').config()
}
const express = require('express') 
const app = express()
const db = require('./config/database')
// routes
const nriRoutes = require('./routes/getTables')

app.get('/', (req, res) => 
  res.send('nri api up')
)

app.use('/apiv1', nriRoutes)

db
  .sync({logging:false})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5010)
  })