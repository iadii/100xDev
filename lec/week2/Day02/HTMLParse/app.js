const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 4000;
app.use(bodyParser.json())

const sumFun = function(num){
    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}
const proFun = (num) => {
    let pro = 1;
    for(let i = 1; i <= num; i++){
        pro = pro * i;
    }
    return pro;
}

app.post('/update', (req, res) => {

    const num = req.body.num;
    const valSum = sumFun(num);
    valPro = proFun(num)

    let valObj = {
        sum : valSum,
        pro : valPro
    }

    res.send(valObj)
})

app.get('/', (req, res) => {

})

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
})