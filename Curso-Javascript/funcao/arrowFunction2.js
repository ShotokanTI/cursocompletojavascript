function Pessoa() {
    this.idade = 0

    //arrows function são de extremo beneficio,pois o 'this' é referenciado diretamente ao objeto "Pessoa" e não ao contexto de uma funcao 'setInterval'
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}


new Pessoa