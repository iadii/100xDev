// there are multiple ways to send request to server
// browser, postman, nodejs, springBoot
// since nodejs can send request to server (which is itself running on server)
// it will do with another external library called fetch

let sendObj = {
    "method" : "GET"
}

fetch("http://localhost:4000/adii?num=4", sendObj).then((result) => {
    console.log(`this is result is ${result.status}`);

    result.json().then((jsonBody) => {
        console.log(jsonBody);
    })
})