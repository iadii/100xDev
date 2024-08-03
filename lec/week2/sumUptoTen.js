// npm init -y
// npm i express





const express = require('express')
const app = express()
// const port = 5173
const port = 3000


function calculateSum(count){

    let sum = 0;
    for(let i = 1; i <= count; i++){

        sum += i;
    }
    return sum
}


function handleFirstRequest(req, res){
    let calculatedSum = calculateSum(100);
    let ans = `calculated sum is ${calculatedSum}`
    
    res.send(ans)


}

app.get('/', handleFirstRequest)

const started = () => {
    console.log(`Example app listening on port ${port}`)
  }
  
app.listen(port, started)

