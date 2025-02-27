const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = 88; 

app.use(bodyParser.json());

const todos = [];

const findIndex = (arr, id) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === id) {
            return i;
        }
    }
    return -1
}

function removeAtIndex(arr, indx) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i !== indx){
            newArr.push(arr)
        }
    }
    return newArr
}

app.get('/todos', (req, res) => {
    res.status(200).json(todos)
})

// from specific id
app.get('/todos/:id', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if(todoIndex === -1){
        res.status(404).send();
    }
    else{
        res.status(200).json(todos[todoIndex])
    }
})

app.post('/todos', (req, res) => {
    const {title, desc} = req.body;

    const newTodo = {
        id : Math.floor(Math.random() * 100000000 + 1),
        title : title,
        desc : desc
    }
    todos.push(newTodo)
    res.json(todos)
})

app.delete('/todos/:id', (req, res) => {
    const todoIndex = findIndex(arr, parseInt(req.params.id));
    if(todoIndex === -1){
        res.status(404).send();
    }
    else{
        todo = removeAtIndex(arr, todoIndex);
        res.status(200).send();
    }
})

app.listen(port)