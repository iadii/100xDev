const doArithmatic = (index1, index2, arithmaticFn) => {
	return arithmaticFn(index1, index2)
}

function add(i1, i2){
	return i1 + i2
}
function sub(i1, i2){
	return i1 - i2
}
function product(i1, i2){
	return i1 * i2
}
function adivide(i1, i2){
	return i1 / i2
}


console.log(doArithmatic(5,9,product))