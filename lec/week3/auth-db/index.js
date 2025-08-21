const express = require('express');
const jwt = require('jsonwebtoken')
const app = express()
require('dotenv').config()
// const PORT = process.env.PORT
const PORT = 3000

// it is server password, it is for to decrypt the user's password
// as jwt requires a server password to decrypt 
const jwtPassword = '@MMy1201'
app.use(express.json());

const allUser = [
    {
        username : "iadii",
        password : "@Aditya45",
        name : "Aditya Mishra"
    },
    {
        username : "hari",
        password : "1201",
        name : "raja hari singh"
    },
    {
        username : "shiva_ji",
        password : "5679",
        name : "shiva"
    },
]


function userExists(username, password) {
   let userExists = false
    for(user of allUser){
        if(user.username === username && user.password === password){
            userExists = true;
        }
    }

   return userExists;
}

app.post("/signup", function (req, res) {

  const { username, password } = req.body

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  const token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users",  (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username; 
    // return a list of users other than this username
    const name = decoded.name;

    return res.status(200).json({
        // name: name,
        // username: username

        users: allUser.filter((value) => {
            if(value.username == username){
                return false
            }
            return true
            
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});


app.use((err, req, res, next) => {
    res.status.json({
        msg : `our internal server error`
    })
})

app.listen(PORT)