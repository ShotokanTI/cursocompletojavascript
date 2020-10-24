
// função sem params que consegue resgatar parametros passado na hora da chamada de uma funcao com a palavra reservada "ARGUMENTS"

function soma() {
    let soma = 0

    for (let i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma(1, 2, 3))