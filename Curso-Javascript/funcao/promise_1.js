
let p = new Promise((resolve) => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
}).then((valor) => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))