
const express = require('express')
const app = express();

// const { getPort } = require('./app'); 

// const myVariable = getPort();


// const port = 27;

// app.get('/ammy', (req, res) => {
//     let wrongPlace = `
//         <h3>
//             either go to <a href="http://localhost:${myVariable}/huayra">http://localhost:${myVariable}/huayra</a>
//             <b>or</b> ==AAAA===<a href="http://localhost:${myVariable}/z900">http://localhost:${myVariable}/z900</a>
//         </h3>

//     `
//     res.send(wrongPlace)
// })

//  app.get('/', (req, res) => {
//     let hello = `
//         <em> either go to <a href="http://localhost:${port}/ammy">http://localhost:${port}/ammy</a> </em>
//     `
//     res.send(hello)
//  })

app.listen(4000 , () => {
    console.log(`Server is running at http://localhost:`);
});