//consigo chamar a função mesmo ela ainda não "existindo",pois o interpretador js carrega as funcoes declaration primeiro antes de começar a rodar o codigo
console.log(soma(3,4))

//funcoes diferentes das "declarations" não conseguem chamar
console.log(sub(3,4))

//function declaration

function soma(x,y){
    return x + y
}

//function expression

const sub = function (x,y){
    return x - y
}

//named function expression

const mult = function mult(x,y){
    return x * y
}

//