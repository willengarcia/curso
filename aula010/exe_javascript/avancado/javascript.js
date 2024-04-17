/*
function soma(){
    var resul = []
    for(var i in arguments){
        console.log()
        resul.push(arguments[i]) // guardando os argumentos dentro de um array
        // apenas uma dica para lidar com parametros
    }
    return resul
}
console.log(soma(1,5,7, 'w'))
*/

/* 
    Tratamentos de erros:
    sintaxe:
    try{
        //bloco que deve conter as instruções 1
    }catch(e){
        // bloco que deve conter as instruções, caso de erro
        throw new Error('mensagem') > interrompe o script
    }finally{
        // bloco que sempre vai ser executado indepedendo se deu erro ou não
    }
    
*/
//  try
var video = Array()
video[1] = Array()
video[1]['nome'] = 'luiza'
video[1]['sobrenome'] = 'carvalho'
function getAnime(video){
    try {
        console.log(video[0]['nome'])
    }catch(e){
        console.log('Agora sim podemos tratar o erro')
        console.log(e)
        throw new Error('mensagem')
    }finally {
        console.log('Sempre passa por aqui tyr/catch')
    }
    console.log('A aplicação não morreu')    
}
getAnime(video)