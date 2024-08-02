function printScreen(){
    console.log('Sawasdee kha')
}

setTimeout(printScreen, 3000);
let count = 0;
for(let i = 0; i < 10000 * 10000 * 100000; i++){
    count ++;
}
console.log(count)