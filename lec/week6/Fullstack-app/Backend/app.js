const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();
const todo = require('./models/todo')

const PORT = process.env.PORT || 4001

app.use(express.json());
app.use(cors())

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.status(200).json({
        todos: todos 
    })
})

app.post('/todos', async (req, res) => {

    const {title, description, status} = req.body;
    await todo.create({
        title: title,
        description: description,
        status: status
    })
    res.status(200).json({
        msg: "Todo Created"
    })
})

app.put('/todos', async (req, res) => {
    
    await todo.updateOne(

        { _id: req.body.id },
        // { title: req.body.title }
        {status: req.body.status}
    )
    res.status(201).json({
        msg: "Todo Updated"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})