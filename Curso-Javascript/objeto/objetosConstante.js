//Objetos constantes não permitem atribuicoes a outras referencias de memoria

//Ex:Objeto Pessoa aponta para o objeto de memoria exemplo(123) e que aponta para o objeto/valor{nome:Joao}

const pessoa = {nome:'Joao'}

pessoa.nome='Pedro'

console.log(pessoa)


// pessoa -> 456 -> {}

//Pessoa não poderá receber outro objeto,pois o outro objeto aponta para outra referencia de memoria
// pessoa = {nome:'Ana'}

// console.log(pessoa)

//funcao que permite congelar um objeto para não receber atribuicoes futuras.
Object.freeze(pessoa)
pessoa.nome='Maria'

console.log(pessoa)


//Um objeto "pessoaConstante" nunca apontará para outra referencia de memoria,assim como o seu objeto nome:joao também não mudará,graças a função chamada freeze
//,tornará o objeto em si totalmente constante
const pessoaConstante = Object.freeze({nome:'Joao'})