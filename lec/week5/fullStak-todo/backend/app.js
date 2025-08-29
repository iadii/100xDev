const express = require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4001;

app.use(express.json());


res.get('/todos', (req, res) => {
    res.send('hello')
})
app.post('/postTodo', (req, res) => {
    const {name, description, done} = req.body;

    res.status.json({
        name: name,
        description: description,
        done: done
    })
})

app.listen(PORT)