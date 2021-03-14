console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

//Função aponta para o global e isto é um problema!
function logThisWithOutArrow() {
    console.log(this === global)
}
//É recomendavel usar com arrow para o this apontar para dentro da função.
const logThisWithArrow = () => {
    console.log(this === global)
}

logThisWithOutArrow()
logThisWithArrow()