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
<<<<<<< HEAD
    if(typeof count === 'number'){
        console.log(req.body);
        let ans = handleSum(count);

        var ansObject = {
            sum : ans
        }
        res.send(ansObject)
        // res.send(`sum of num is ${ans}`)
    }else{
        res.status(404).send('you have sent wrong thing here, send number instead')
    }
    
    // res.status(404).send(`sum of num is ${ans}`)
=======
    console.log(req.body);

    if(typeof count === 'number'){

        let ans = handleSum(count);

        res.send(`Total sum is ${ans}`)
    }else{
        res.status(404).send(`sum of num is ${ans}`)
    }
>>>>>>> d19a250e0c8397044d720250a6965443a79c7073
})

app.listen(port, ()=> {
    console.log(`App is listenng at http://localhost:${port}`)
})