const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4002;

// using this only 
// we can catch whatever user send from body otherwise it will return 500(Internal Server Error)
app.use(express.json()); 
app.use((req, res, next) => {
  const { username, password } = req.body;
  
  if(!(username == "adii" && password == "@Adii")){
    res.status(401).json({
      msg : "Enter correct username and password"
    })
    return;
  }
  next();
})

// another way of writing middleware
const kidneyMiddleWare = (req, res, next) => {
  const { kidneyId } = req.body;
  if(!(kidneyId == 1 || kidneyId == 2)){
    res.status(403).json({
      msg : "Dude you can have only max two kidneys and least one kidney"
    })
    return;
  }
  next();
}
// it will go through both middlewares user auth and kidneyid middleware
app.post('/kidneys',kidneyMiddleWare, (req, res) => {
  
  res.status(200).json({
    msg: "your Kidney is perfect",
  });
})

// it will check only user auth
app.post('/heart', (req, res) => {
  res.status(201).json({
    msg : "your heart is fine as fuck"
  })
})

app.listen(PORT)