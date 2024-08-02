

setTimeout(function medi1(){
    console.log('medi 1 is recived');


    setTimeout(function medi2(){
        console.log('medi 2 is recieved');
    },3000);
},5000)