const express = require('express');
const app = express();
port = 3000;

function calculateSum(count){

    let sum = 0;
    for(let i = 1; i <= count; i++){

        sum += i;
    }
    return sum
}

app.get('/', (req, res) => {

    const counter = req.query.counter;

    const calSum = calculateSum(counter);
    res.send(calSum.toString())
})

app.get('/hello', (req, res) => {fgb
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`)
})