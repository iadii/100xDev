const express = require('express')
const app = express();

const port = 3000

// middle ware function takes 3 argument
const middlewar1 = (req,res, next) => {
    console.log(`from the inside of middleware ${req.headers.name}`)
    
    // it can send response too.
    // but if we send response (res.send()) while next is called 
    // it means we are sending resposne twice so it will give error {Cannot set headers after they are sent to the client}
    // if next is called then control reaches to another function so technically we'll send response twice
    // res.send("Errror from the inside of middleware")

    // if we don't call next() the request will be stuck
    next();

    // so code should be like
    /*
        if(condition){
            next();
        }else{
             res.send("Errror from the inside of middleware")
        }
    */
}
// this is way to register a middleware
// means we are telling express if middleWar1 function approves then only other function will get execute
app.use(middlewar1)

function hello(name){
    return `hello ${name}`
}

app.post('/', (req, res) => {
    let name = req.headers.name;
    res.send(hello(name))
})

app.listen(3000)