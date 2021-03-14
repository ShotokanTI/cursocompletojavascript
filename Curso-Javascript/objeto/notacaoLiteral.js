const a = 1
const b = 2
const c = 3

//notação anterior ao ECMASCRIPT 2015
const obj1 = {a:a,b:b,c:c}
console.log(obj1)
//notação literal apos ECMASCRIPT 2015
const obj2 = {a,b,c}
console.log(obj2)


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]:valorAttr}

console.log(obj4)

const obj5 = {
    //forma anterior de criar uma funcao dentro de um objeto
    funcao1:function(){

    },
    //forma reduzida de criar uma funcao dentro de um objeto ES2015
    funcao2(){

    }
}

console.log(obj5)