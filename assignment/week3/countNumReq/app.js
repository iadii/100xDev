const express = require('express')
const app = express()
require("dotenv").config();
const PORT = process.env.PORT || 4001

let countReq = 0
// because every request will go through this 
// so to get total number of requests counter will get update here
app.use((req, res,next) => {
  countReq++;
  next();
})

app.get('/', (req, res) => {
  res.send(`this is ${countReq} request hit by user`)
})

app.listen(PORT)