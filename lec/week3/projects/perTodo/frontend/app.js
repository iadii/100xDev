const title = document.querySelector('#title')
const desc = document.querySelector('#desc')
const sendT = document.querySelector('.sendT')
const getTodo = document.querySelector('.getT')
const body = document.body;

const container = document.createElement('div')
const id = document.createElement('span')
const titleDiv = document.createElement('div')
const descDiv = document.createElement('div')
    

function dataDisp(resdata){

container.style.display = 'flex'

   /*  for(let i of resdata){
        id.innerHTML = resdata[i].id;
        titleDiv.innerHTML = resdata[i].title;
        descDiv.innerHTML = resdata[i].desc;
    } */

    // container.appendChild(id)    
    // container.appendChild(titleDiv)    
    // container.appendChild(descDiv)   

    container.innerHTML = resdata
    body.appendChild(container) 
}

function getData() {
    fetch("http://localhost:3002/todos",{
        method : "GET"
    }).then((resp) => {
        resp.json().then((resdata) => {
            
            console.log(resdata);
            dataDisp(JSON.stringify(resdata))

            
            
        })
    })
}

getData();

getTodo.addEventListener('click', getData)

sendT.addEventListener('click', () => {
    fetch("http://localhost:3002/todos",{
        method : "POST",
        body: JSON.stringify({
            title: title.value,
            description : desc.value
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    }).then((resp) => {
        resp.json().then((resdata) => {
            console.log(resdata);
        })
    })
})

