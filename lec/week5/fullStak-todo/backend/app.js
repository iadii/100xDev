const express = require('express')
const app = express();
const cors = require('cors')
const { createTodo,updateTodo } = require('./validation/types')
const todo = require('./models/db')
require('dotenv').config();
const PORT = process.env.PORT || 4001; 

app.use(express.json());
app.use(cors())

 
// for posting todos
app.post('/postTodo', async(req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload) 

    if(!parsePayload.success){
        return res.status(411).json({ 
            msg: 'you sent wrong input'
        })
    }

    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        msg: "Todo Created"
    })
})
  
// for getting todos
app.get('/todos', async (req, res) => {
    // to find all todos
    const todos = await todo.find({});
    res.status(200).json({
        todos: todos 
    })
})

// for marking specific todos completed
app.put('/completed', async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        return res.status(411).json({
            msg: 'you sent the wrong inputs'
        })
    }
    await todo.updateOne(
        { _id: req.body.id },
        { completed: true }
    );

    // this one also we can use it(it is more common to use)
    // const updatedTodo = await todo.findByIdAndUpdate(
    // req.body.id,
    // { completed: true },
    // );


    res.status(201).json({
        msg: 'Todo marked completed '
    })
})
 
app.listen(PORT, () =>{
    console.log(`app is running at http://localhost:${PORT}`)
})