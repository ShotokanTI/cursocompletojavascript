function criarPessoa(nome,preco){
    return {
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarPessoa('notbook','2199'))
console.log(criarPessoa('ipad','1199'))
console.log(criarPessoa('pcgamer','5000'))