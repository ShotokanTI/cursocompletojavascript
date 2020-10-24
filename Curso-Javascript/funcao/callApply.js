function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}


const produto = {
    nome: 'Notbook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
console.log(produto.getPreco())


const carro = {
    preco: 5000,
    desc: 0.20,
}

//A unica diferença entre call e apply é na passagem de parametros
console.log(getPreco.call(carro))

console.log(getPreco.apply(carro))

//na função call passamos primeiramente o contexto de qual o this da funcao getPreco irá.. 
//referenciar que no caso é o objeto Carro
//e logo em seguida passamos os parametros da propria funcao
console.log(getPreco.call(carro, 0.17, '$'))

//O apply funciona da mesma maneira,só devemos ficar atentos em passar o array como parametro
console.log(getPreco.apply(carro,[0.17,"$"]))

