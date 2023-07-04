const express = require("express");
const path = require('path');
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')
const cors = require('cors');
// const morgan = require('morgan')
const app = express()
app.use(express.json())
app.use(cors())
// app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/planets',planetsRouter)
app.use('/launches',launchesRouter)
app.get('/*', (req,res) => {
    res.sendfile(path.join(__dirname, '..', 'public', 'index.html'))
})
module.exports = app