const fs = require('fs');
function fileRead(err, content){
    console.log(content);
}

fs.readFile('a.txt','utf-8', fileRead);

// fs.readFile('a.txt','utf-8').then(fileRead)