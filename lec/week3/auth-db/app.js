const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.URI);

app.use(express.json);

// db model
const Users = mongoose.model('Users', { 
    name: String,
    email : String, 
    password: String 
});

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email : email})
    if(existingUser){
        return res.status(400).json({
            msg : "User already exists"
        })
    }

    const User = new Users({
        name : name,
        email : email,
        password : password
    })

    User.save();
    res.status(200).json({
        msg : "User created successfully 🎉"
    })
})


app.listen(PORT)