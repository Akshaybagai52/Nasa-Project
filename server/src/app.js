const express = require("express");

const planetsRouter = require('./routes/planets/planets.router')
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors())
app.use(planetsRouter)
module.exports = app