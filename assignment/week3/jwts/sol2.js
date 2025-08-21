// Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const z = require('zod')
const dotenv = require('dotenv')
dotenv.config()
const PORT = 4001
const jwtPassword = process.env.secret_key || "Aditya"

// zod validation
app.use(express.json())
const validation = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

app.post('/signup', (req, res) => {
    const result = validation.safeParse(req.body)
    if(!result.success){ 
        return res.send(null)
    }

    const { username, password} = result.data
    const token = jwt.sign({username : username}, jwtPassword)

    res.status(201).json({
        token
    })
})

app.get('/users', (req, res) => {
    const token = req.headers.authorization;

    let decoded = false
    if(jwt.decode(token)){
        decoded = true
       return res.json({decoded})
    }
    res.json({decoded})
})


app.listen(PORT)