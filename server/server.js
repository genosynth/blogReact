const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const path = require('path') // path is used for deployment


dotenv.config()



app.use(cors())
app.use(express.json())
app.use('/', routesUrls)


 app.use(express.static(path.join(__dirname + '/public' )))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});  

mongoose.connect(process.env.DATABASE_ACCESS, (error, result) =>{
  if (error) {return console.log(error)}
  else console.log("Database connected")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})