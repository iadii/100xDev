const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 4001

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        msg : "hello world"
    })
})

app.listen(PORT, () => {
    console.log('app is running at http://localhost:4001')
})