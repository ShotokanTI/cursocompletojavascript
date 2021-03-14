//Contador a e b instanciam o msm objeto
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
//criando novas instancias com uma factory
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor)
