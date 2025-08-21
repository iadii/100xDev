// Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
const express = require('express');
const app = express();
const z = require('zod');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const PORT = process.env.PORT || 5001;
const jwtPassword = "Aditya"


app.use(express.json())


// zod Schema
const validate = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

app.post('/signup', (req, res) => {
    const result = validate.safeParse(req.body);
    
    if(!result.success){ 
        return res.send(null)
    }    
    const {username, password} = result.data
    const token = jwt.sign({username: username},jwtPassword)
    res.json({token})

})

app.listen(PORT)