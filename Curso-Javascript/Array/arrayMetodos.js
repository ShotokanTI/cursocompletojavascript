const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // massa saiu do array.
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementoss

//adicionar

pilotos.splice(2,0,'Botas','Massa')
console.log(pilotos)

//remover

pilotos.splice(3,1) //massa saiu
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array gerado pelo slice
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)