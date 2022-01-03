const fs = require('fs')
const path = require('path')


const lerArquivo = (caminho) => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (_, conteudo) => {
            if (conteudo) {
                resolve(conteudo.toString())
            } else {
                reject('Não existe este arquivo')
            }
        })
        console.log('Depois de ler...');
    })
}
const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
    .catch(console.log)