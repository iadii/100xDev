const express = require('express')

const app = express();
const port = 442;
function calculateSum(count){

    let sum = 0;
    for(let i = 1; i <= count; i++){

        sum += i;
    }
    return sum
}


function handleFirstRequest(req, res){
    let calculatedSum = calculateSum(100);
    // let ans = `calculated sum is ${calculatedSum}`
<<<<<<< HEAD:lec/week2/calSum/index.js
    
    res.send(calculatedSum.toString())
=======
    res.send(calculatedSum.toString())

    // since return from calculateSum will be in integer so it is being mistakenly interpreted as a status code. so we need to convert it in string
    // res.send(calculatedSum)
>>>>>>> 56dafdb2bcb39190b37dc1e51ad66753556009c4:lec/week2/index.js
}



app.get('/', handleFirstRequest)


app.listen(port, () => {
    console.log(`port is running at ${port}`);
})