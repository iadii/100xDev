const jwt = require('jsonwebtoken')

const password = "Adii"

const token = jwt.sign({
    name: "Aditya Mishra",
    amIsuccessful : false,
    williBe : true
}, password)

console.log(token)

const ver = jwt.verify(token, password)
console.log(ver)