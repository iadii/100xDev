const box = document.querySelector('.box')

async function fet(){
    const response = await fetch('http://localhost:4001')
    const finalData = await response.json()
    console.log(finalData)


    box.append(finalData.msg)
}

fet()