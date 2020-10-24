const prod1 = {}

prod1.nome = 'celular ultra mega'
prod1.preco = 4999.90
prod1['desconto Legal'] = 0.40 // evitar atributos com espaco

console.log(prod1)

const prod2 ={
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{ 
        blabla:1,
        obg:{
            blabla:2
        }
    }
}

//json é um formato textal para comunicações entre sistemas 
//e objetos é uma coleção de chaves e valores
'{"nome": "Camisa Polo",preco: 79.90}'


console.log(prod2)