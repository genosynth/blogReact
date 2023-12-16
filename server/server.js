const express = require('express')
const app = express()
const port = 4000
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



app.use(express.static(path.join(__dirname + '/public' )))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});  


app.use(express.json())

app.use(cors({credentials: true, origin: 'http://localhost:4000/'}));
app.use('/app', routesUrls)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://example.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})