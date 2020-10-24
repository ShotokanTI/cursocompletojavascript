const valoresArray = [7.7,8.9,6.3,9.2]
console.log(valoresArray[0],valoresArray[3])
console.log(valoresArray[4])
valoresArray[4] = 10
console.log(valoresArray)
console.log(valoresArray.length)

valoresArray.push({id:3},false,null,'teste')
console.table(valoresArray)

console.log(valoresArray.pop())

delete valoresArray[0]
console.log(typeof valoresArray)