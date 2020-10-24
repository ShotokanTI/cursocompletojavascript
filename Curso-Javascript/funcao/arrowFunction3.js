let comparaComThis = function (param) {
    console.log(this === param)
}


//Neste cenario fora do navegador,ou seja,com o node em execução o this é o proprio objeto global e não o window
//logo,global == this = true
comparaComThis(global)

//porém eu não quero que o this seja referenciado ao objeto global,pois pode ocorrer complicações desenvolvendo desta maneira
let obj = {}

//então utilizo o metodo bind para apontar o this ao objeto vazio criado
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)

comparaComThisArrow(module.exports)



comparaComThisArrow = comparaComThisArrow.bind(obj)

comparaComThisArrow(obj)