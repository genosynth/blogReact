const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const path = require('path') // path is used for deployment


dotenv.config()


mongoose.connect(process.env.DATABASE_ACCESS, (error, result) =>{
  if (error) {return console.log(error)}
  else console.log("Database connected")
})



const buildPath = path.join(__dirname, 'public')


app.use(express.static(buildPath))
app.use(express.json())
app.use(cors())

app.use('/app', routesUrls)

// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})