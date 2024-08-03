function factorial(n) {
	let fact = 1;
	while( n >= 1){
		fact *= n;
		n--;
	}
	return fact
}
console.log(factorial(6))

const anotherFact = (n) => {
	let fact = 1
	for(let i = 1; i <= n; i++) {
		fact *= i;
	}
	return fact
}
console.log(anotherFact(7))