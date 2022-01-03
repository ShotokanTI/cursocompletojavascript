function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo);
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(10)
        }, 5000);
    })
}

async function executar(){
    console.time('promise')
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`Async/Awai ${valor}...`)
    await esperarPor(1500)
    console.log(`Async/Awai ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Awai ${valor + 2}...`)
    console.timeEnd('promise')
}

executar()