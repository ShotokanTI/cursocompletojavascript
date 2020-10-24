//funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) // passará no parametro b o atributo undefined e retornará um Not a Number
imprimirSoma(2,3,4,5,5,6,7) // pega os dois primeiros parametros,porém funciona diferente de outras linguagens


//funcao com retorno

function soma(a, b = 0){
    return a + b
}

console.log(soma(5))
console.log(soma())
console.log(soma(10))