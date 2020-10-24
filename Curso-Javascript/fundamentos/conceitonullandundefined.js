
//CONCEITO DE REFERENCIA 

//Os objetos em javascript quando recebem atribuicao são passados o endereco de memoria e não o valor em si

const a = {name:'teste'}
const b = a // atribuição por referencia
a.name = 'jogo'
console.log(a)
//Atribuicoes de objetos recebem a posição/referencia de memoria de onde o objeto está armazenado



//tipos primitivos como o 30 são diferentes de objetos,aqui a atribuição é passado o valor
let c = 30
let d = c



//CONCEITO DE UNDEFINED
let valor // não inicializada "undefined"
console.log(valor)
// console.log(valor2)//nem foi inicializada e nem foi declarada no escopo do programa "not defined"

valor = null // ausência de valor e de referencia a memoria
// console.log(valor.toString()) //ERRO

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)
produto.preco = undefined // evite atribuir undefined,deixe a linguagem definir por padrão
//atribuir undefined não zera o valor da variavel 
console.log(produto.preco)
console.log(produto)


produto.preco = null // usar null para zerar uma variavel
console.log(produto)