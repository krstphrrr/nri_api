if(process.env.NODE_ENV!=='production'){
  require('dotenv').config()
}
const express = require('express') 
const app = express()
const db = require('./config/database')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const authCheck = require('./middleware/check-auth')
// routes
const nriRoutes = require('./routes/getTables')

app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))


app.get('/', (req, res) =>{ 

  res.status(200).json({
    message:'ok'
  })
  // console.log(secret)
})

app.use('/apiv1',authCheck, nriRoutes)

db
  .sync({logging:false})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5010)
  })