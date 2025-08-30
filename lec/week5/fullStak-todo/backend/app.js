const express = require('express')
const app = express();
const cors = require('cors')
const {createTodo, updatTodo} = require('./validation/types')
const todo = require('./models/db')
require('dotenv').config();
const PORT = process.env.PORT || 4001; 

app.use(express.json());
app.use(cors())

 
// for posting todos
app.post('/postTodo', async(req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse() 

    if(!parsePayload.success){
        return res.status(411).json({
            msg: 'you sent wrong input'
        })
    }

    console.log(parsePayload)
    const newTodo = new todos({
        title: parsePayload.title
    })
    // put it in mongodb
})
  
// for getting todos
res.get('/todos', (req, res) => {
    res.send('hello')
})

// for marking specific todos completed
app.put('/completed', (req, res) => {

})

app.listen(PORT)