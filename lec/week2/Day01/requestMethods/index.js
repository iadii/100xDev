const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('this is get method')
})

app.post('/postImg', (req, res) => {
    res.send('Hello Adii this is post method')
})

app.listen(port = 3000, () => {
    console.log(`Application is running at http://localhost:${port}`)
})
