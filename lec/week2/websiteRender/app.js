const express = require('express')
const app = express();

// const port = 5173;
// module.exports = { port };
function getPort() {
    return 5173;
}
module.exports = { getPort }
port = getPort();

/*
 app.get('/z900', (req, res) => {
    const body = document.body;
    const img = document.createElement('img')
    img.src = 'https://i.pinimg.com/564x/47/75/90/4775908ae96dda3c60772c9c451646ca.jpg'
    img.width = 300 + "px"
    res.send(body.append(img))
 }) */

// you can't use browser-specific objects like document and document.createElement on the server side in Node.js. Instead, you should send a proper HTML response from the server.

app.get('/z900', (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Z900 Image</title>
        </head>
        <body>
            <img src="https://i.pinimg.com/564x/47/75/90/4775908ae96dda3c60772c9c451646ca.jpg" width="300px">
        </body>
        </html>
    `;
    res.send(htmlContent);
});

app.get('/huayra', (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Huayra Image</title>
        </head>
        <body>
            <img src="https://images.unsplash.com/photo-1635974065083-03656b42d9cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300px">
        </body>
        </html>
    `;
    res.send(htmlContent);
});

app.get('/', (req, res) => {
    let wrongPlace = `
        <h3>
            either go to <a href="http://localhost:${port}/huayra">http://localhost:${port}/huayra</a>
            <b>or</b> <a href="http://localhost:${port}/z900">http://localhost:${port}/z900</a>
        </h3>

    `
    res.send(wrongPlace)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});