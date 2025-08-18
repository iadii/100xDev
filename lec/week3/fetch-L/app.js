const btn = document.querySelector('#personData')

const btn2 = document.querySelector('#promis')
const box = document.createElement('div')
document.body.appendChild(box)

btn.addEventListener('click', ()=>{
    const response = fetch('https://fakerapi.it/api/v2/persons')
    .then((response) =>{
        response.json()
        .then((finalData) => {

            // console.log(finalData.data)
            for(dt of finalData.data){
                console.log(dt)
            } 
        })
    })
    console.log(response)
})


// this one is easy

btn2.addEventListener('click', async ()=>{

    const resposne = await fetch('https://fakerapi.it/api/v2/texts')
    const finalData = await resposne.json()

    console.log("await ")
    for( dt of finalData.data){
        console.log(dt)
        const p = document.createElement('p')
        p.innerText = dt.title
        box.append(p)
    }
})