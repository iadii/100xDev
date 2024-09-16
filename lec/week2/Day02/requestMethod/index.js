const exp = require('express');
const app = exp();

app.use(exp.json());
const calcy = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i++){

        sum += i;
    }
    return sum
}

app.post('/', (req, res) => {
    let count = req.query.count;
    let cal = calcy(count)
    res.send(cal.toString());
})
// since there are some other ways to send data to backend except query param
// i. header 
// ii. body
app.post('/body', (req, res) => {
    let count = parseInt(req.body.count);
    let cal = calcy(count);
    res.send(cal.toString())
})
app.post('/header', (req, res) => {
    let count = req.headers.count;
    let cal = calcy(count);
    res.send(cal.toString())
})

app.listen(port = 4000, () => {
    console.log(`App is running at http://localhost:${port}`)
})