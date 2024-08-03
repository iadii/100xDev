const fs = require('fs');
function summation (n){
	let sum = 0;
	for(let i = 0; i<= n; i++){
		sum += i
	}
	console.log( sum)
}

function fileIsRead (err, fileContent){
	 return summation(fileContent)
}


fs.readFile("choco.txt", 'utf-8', fileIsRead);