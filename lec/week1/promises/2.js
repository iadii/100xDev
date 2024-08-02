function promiseBody(){

}
function medicine1Get(){
    var ans = new Promise(promiseBody)

    return ans
}

var medicine = medicine1Get();
console.log(medicine)
console.log(medicine.then)