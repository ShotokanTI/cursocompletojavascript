//par nome/valor
const saudacao = 'Opa' //contexto léxico 1 


function exec(){
    const saudacao = 'Fala' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const clientes = {
    nome:'Pedro',
    idade:32,
    peso:90,
    endereco:{
        logradouro:'rua muito legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(clientes)