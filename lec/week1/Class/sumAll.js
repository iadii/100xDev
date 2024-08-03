const sumAll = (startIndex, endIndex) => {
	let sum = 0;
	for(let i = startIndex; i <= endIndex; i++){
		sum += i;
	}
	return sum
}

console.log(sumAll(10,100))
console.log(sumAll(1,1000))