const express = require('express')
var bodyParser = require('body-parser')
const app = express();
const port = 3000
app.use(bodyParser.json())


const handleSum = (num) => {
    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}

app.post('/handleSum', (req, res) => {
    const count = req.body.count
    console.log(req.body);

    if(typeof count === 'number'){

        let ans = handleSum(count);

        res.send(`Total sum is ${ans}`)
    }else{
        res.status(404).send(`sum of num is ${ans}`)
    }
})

app.listen(port, ()=> {
    console.log(`App is listenng at http://localhost:${port}`)
})