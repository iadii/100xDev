const express = require('express')
const app = express();

app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`name is ${name} and his age is ${age}`)
})

app.get('/headers', (req, res) => {
    const count = req.headers.count;
    const name = req.headers.name;

    res.send(`name is ${name}, and money count is ${count}`)
})

app.listen(3000, () => {

})