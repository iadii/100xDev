const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const z = require('zod')
dotenv.config();
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.URI);

app.use(express.json());

// db model
const Users = mongoose.model('Users', { 
    name: String,
    email : String, 
    password: String 
});

// zod schema
const signupSchema = z.object({
    name : z.string().min(4),
    email: z.string().email(),
    password: z.string()
})

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = signupSchema.safeParse(req.body);

        const existingUser = await Users.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                msg: "User already exists"
            });
        }
        const newUser = new Users({
            name,
            email,
            password
        });

        await newUser.save();

        res.status(200).json({
            msg: "User created successfully 🎉"
        });

    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({
                msg: "Validation error",
                errors: err.errors
            });
        }
        res.status(500).json({
            msg: "Internal server error"
        });
    }
});

app.get('/', (req, res) => {
    res.send(`hello word`)
})

app.use((err, req, res, next) => {
    res.status(500).json({
        msg : `Oops sorry my bad`
    })
})


app.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`)
})