// Função em JS é first-class object
//Higher-order function


//criar de forma literal

function fun1() { }

// Armazenar em uma variavel função anonima

const fun2 = function () { }

//Armazenar em um array

const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))

// Armazenar em um atributo de objeto

const obj = {}

obj.falar = function () { return 'opa' }

console.log(obj.falar())

//Passar função com param

function run(fun) {
    fun()
}
run(function () { console.log('executando....') })

//uma função pode retornar/conter um função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(3)