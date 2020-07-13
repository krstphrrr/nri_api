if(process.env.NODE_ENV!=='production'){
  require('dotenv').config()
}
const express = require('express')

const app = express()
const db = require('./config/database')

app.get('/', (req, res) => 
  res.send('nri api up')
)

db
  .sync({logging:false})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5010)
  })