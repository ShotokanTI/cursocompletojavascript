//novo recurso do ES2015

const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua Abc',
        numero:1000
    }
}

//Uma forma moderna de usar atributos de objetos com o operador Destructuring
const { nome,idade } = pessoa

console.log(nome, idade)

//extraindo atributos e escolhendo o nome da variavel
let { nome:n , idade:i } = pessoa

console.log(n, i)

//situacao onde não existe esses atributos dentro do objeto pessoa
const  { sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome,bemHumorada)

//Acessando objetos dentro de objetos e extraindo
const { endereco: {logradouro,numero,cep} } = pessoa

console.log(logradouro,numero,cep)