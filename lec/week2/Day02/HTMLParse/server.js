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

app.get('/adii', (req, res) => {

    // const num = req.body.num;
    const num = req.query.num;
    const valSum = sumFun(num);
    valPro = proFun(num)

    let valObj = {
        sum : valSum,
        pro : valPro
    }

    // res.send(valObj)
    res.json(valObj)
})

app.get('/html', (req, res) => {
    let html = `
    <!DOCTYPE html>
<html lang="en">
<head>
   
    <title>express</title>
</head>
<body>
    <h2>Hi there</h2>
</body>
</html>
    `
    res.send(html)
})

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html")
})


app.get('/rndm', (req, res) => {
    res.send({
        "hello" : "shutup",
        "adii" : "pooo"
    })
})
app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
})