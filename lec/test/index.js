const express = require('express')
const app = express()
const port = 3000;

const calSum = (count) => {

    let sum = 0;
    for(let i = 0; i <= count; i++){
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req, res){
    let calculatedSum = calSum(100);
    let ans = `calculated sum is ${calculatedSum}`
    res.send(ans);
}

app.get('/', handleFirstRequest)

app.listen(port, () => {
    console.log(`app is running on port : ${port}`)
    console.log(`localhost:${port}`)
})