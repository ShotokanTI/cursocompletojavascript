const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    //a funcao vai exibir 'Global' e não 'Local',pois irá procurar a constante "valor" proximo ao contexto lexico de onde ela foi criada.
    minhaFuncao()
}

exec()