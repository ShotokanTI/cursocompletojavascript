//Callback é tudo aquilo que retorna dados atraves de eventos tanto no browser quanto em ambiente node

const fabricantes = ['Mercedes','Audi','BMW']

function imprimir(nome,indice){
    console.log(`${indice +1} ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))