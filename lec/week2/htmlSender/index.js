const express = require('express')
const app = express();
const path = require('path');


app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '/frontEnd/home.html'));
})
app.get('/service',(req, res) => {
    res.sendFile(path.join(__dirname, '/frontEnd/service.html'));
    
})

app.listen(port = 3000, () => {
    console.log(`App iis runing at http://localhost:${port}`)
})