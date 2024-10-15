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

    res.send(`congrats ${greet}`)
})

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