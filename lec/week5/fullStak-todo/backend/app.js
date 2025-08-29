const express = require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4001;

res.get('/getData', (req, res) => {
    res.send('hello')
})