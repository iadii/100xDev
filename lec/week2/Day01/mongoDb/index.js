const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('shhkjdhkdhjk')
})

app.post('/', (req, res) => {
    res.send('shhkjdhkdhjk')
})

app.listen(port = 3000, () => {
    console.log(`Application is running at http://localhost${port}`)
})
