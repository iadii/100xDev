const express = require('express')
const app = express();
const cors = require('cors')
const z = require('zod')
require('dotenv').config();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(cors())
// for posting todos

const validateData = z.object({
    name: z.string().max(10),
    description: z.string()
})
const valiidateCompletion = z.object({
    id: z.string()
})

app.post('/postTodo', (req, res) => {
    const {name, description} = req.body;

    res.status.json({
        name: name,
        description: description, 
    })
})

// for getting todos
res.get('/todos', (req, res) => {
    res.send('hello')
})

// for marking specific todos completed
app.put('/completed', (req, res) => {

})

app.listen(PORT)