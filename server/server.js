const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect("mongodb+srv://test0db:1234@test0.psdbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (error, result) =>{
    if (error) {return console.log(error)}
    else console.log("Database connected")
})

/* app.get('/', (req, res) => {
  res.send('Hello World!')
}) */
app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})