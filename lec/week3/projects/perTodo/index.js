const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const todo = [];

function findIndex(arr, id){ 
    for(let i = 0; i <= arr.length; i++){
        if(arr[i].id === id){
            return i;
        }
    }
    return -1;
}

const removeIndex = (arr, index) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i !== index){
            newArr.push(arr)
        }
    }
    return newArr;
}

app.get('/todos',(req, res) => {
    res.status(200).json(todo)
})

app.post('/todos', (req, res)  => {
    const {title, desc} = req.body;
    const newTodo = {
        id : Math.floor(Math.random() * 100000 + 1),
        title : title,
        desc : desc
    }
    res.status(200).json(newTodo)
})


app.get('/todos/:id', (req, res) => {
    const todoIndex = findIndex(todo, parseInt(req.params.id));
    if(todoIndex === -1){
        res.status(404).send();
    }
    else{
        res.json(todos[todoIndex])
    }
});


app.delete('/todos/:id', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.id))
    if(todoIndex === -1){
        res.status(404).send();

    }else{
        todos = removeIndex(todos.todoIndex);
        res.status(200).send()
    }
})

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`)
})