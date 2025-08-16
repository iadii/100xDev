const express = require("express");
const app = express();
require("dotenv").config();
// without middleware -> we have to repeat multiple things
// for i want to route for different purpose but both routes should be go through auth again
// so we have const { username, password } = req.headers;
// if (!(username === "adii" && password === "@Adi")) {}
// so we don't repeat thats why we use middleware
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "your app is running",
  });
});

app.get("/kidneys", (req, res) => {
  const { username, password } = req.headers;
  const { kidneyId } = req.query;
  if (!(username === "adii" && password === "@Adi")) {
    res.status(401).json({
      msg: "Enter correct username and password",
    });
    return;
  }

  if(!(kidneyId == 1 || kidneyId == 2)){
    res.status(403).json({
      msg : "Dude you can have only max two kidneys and least one kidney"
    })
    return;
  }
  res.status(200).json({
    msg: "your Kidney is perfect",
  });
});


// without middleware we have to reinitialize authorization
app.get('/heart', (req, res) => {
  const { username, password } = req.headers;
  if (!(username === "adii" && password === "@Adi")) {
    res.status(401).json({
      msg: "Enter correct username and password",
    });
    return;
  }

  res.status(200).json({msg : "Your heart is fine as fuck"})
  
})



app.listen(PORT, () => {
  console.log(`app is runng at http:localhost:${PORT}`);
});
