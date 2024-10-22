const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 4000;
app.use(bodyParser.json())

const fns = function(req, res){
    res.send(`function1 at same route`)
}
const fns1 = function(req, res){
    res.send(`function2 at same route`)
    
}

app.get('/',fns)

// two function can't run at same route and at same request method
app.get('/',fns1)

// so we'll change request method
app.post('/',fns1)
app.put('/',fns1)
app.delete('/',fns1)




app.get('/home', (req, res) => {
    res.send(`this is home route`)
})
app.get('/home/root', (req, res) => {
    res.send(`this is home/root route`)
})

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
})