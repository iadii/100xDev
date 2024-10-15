import express from 'express';
const app = express();
const port = 3000;

let numOfRequest = 0;
function mdl(req, res, next){
    numOfRequest += 1
    console.log(`number of request is  ${numOfRequest}`);
    next()
}
app.use(mdl)

// we can use route specific middkeware

// app.get('/', middlewareFunction ,(req, res) => {}


function handleSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum
}

app.get('/', (req, res) => {
    // console.log(req.headers);
    let counters = req.headers.counters;
    let ans = handleSum(counters);

    res.send(`ans is ${ans}`)
})

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
})