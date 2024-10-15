import express from 'express';
const app = express();
const port = 3000;

const mdl = (req, res, next) => {
    console.log(`from inside middleware ${req.headers.counters}`);
    next();
}

app.use(mdl)


function handleSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum
}

app.get('/', (req, res) => {
    console.log(req.headers);
    let counters = req.headers.counters;
    let ans = handleSum(counters);

    res.send(`ans is ${ans}`)
})

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
})