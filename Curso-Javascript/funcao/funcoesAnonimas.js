const soma = function (x, y) {
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
//Passando uma funcao anonima para uma outra funcao anonima
imprimirResultado(3, 4, soma)

//Passando uma funcao anonima para uma outra funcao anonima
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

//criando uma funcao anonima dentro de um objeto
const pessoa ={
    falar:function(){
        console.log("opa");
    }
}

pessoa.falar();