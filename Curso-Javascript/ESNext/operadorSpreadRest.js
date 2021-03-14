const funcionario = {
    nome: 'Maria', salario: 121233.33
}
const clone = { ativo: true, ...funcionario }

console.log(clone)

//usar spread com array

const grupoA = ['João','Pedro','Gloria']
const grupoFinal = ['Maria','Rafaela',...grupoA]

console.log(grupoFinal)