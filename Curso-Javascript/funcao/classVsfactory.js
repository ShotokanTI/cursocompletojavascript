class Pessoa {
    constructor(Nome){
        this.nome = Nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')

p1.falar()

//factory
const criarPessoa = nome => {
    return {
        falar:() => console.log(`Meu nome é ${nome}`)
    }
}

const factory = criarPessoa('matheus')

factory.falar()
