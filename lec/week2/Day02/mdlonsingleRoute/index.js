const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000

const hh = (name) => {
    return `hello ${name}`
}

app.post('/greet',(req, res) => {
    const name = req.body.name
    const greet = hh(name)

    res.send(`Hola ${greet}`)
})

app.post('/ammy', (req, res) => {
    const name = req.headers.name;
    const greet = hh(name);

    res.status(505)
    res.send(`<html><body><h1>Hola!</h1><p>${greet}</p></body></html>`);
});

app.post('/adii', bodyParser.json(), (req, res) => {
    const name = req.body.name
    const greet = hh(name)

    const grretObj = {
        greeting : greet
    }
    res.status(404)
    res.send(grretObj)
    // res.send(`congrats ${greet}`)
})

app.listen(port, () => {
    console.log(`app is running at ${port}`)
})