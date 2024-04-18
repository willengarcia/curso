function start(){
    window.location.replace('http://127.0.0.1:5500/aula010/exe_javascript/desafio/start.html')
    var dificuldade = document.getElementById('nivel').value
    console.log(dificuldade)
}    
var vida = 1
function aparecerMosca(){

    // Removendo o mosquito anterior, caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        document.getElementById('v'+vida).src = 'imagens/coracao_vazio.png'
        vida++
        if (vida > 3){
            window.location.replace('http://127.0.0.1:5500/aula010/exe_javascript/desafio/game_over.html')
        }
        
    }
    // Encapsulando a altura e largura da página
    var altura = window.innerHeight
    var largura = window.innerWidth
    var posicaoX = Math.floor(Math.random() * largura)- 90
    var posicaoY = Math.floor(Math.random() * altura)- 90
    posicaoX = posicaoX <0 ? 0 : posicaoX
    posicaoY = posicaoY <0 ? 0 : posicaoY

    // Criando elemento img
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanho()
    mosquito.style.left = posicaoX +'px'
    mosquito.style.top = posicaoY +'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove() // faz referência ao próprio elemento que está a função
    }
    document.body.appendChild(mosquito)
    console.log(tamanho())
}
function tamanho(){
    var classe = Math.floor(Math.random()*3)
    switch(classe){
        case 0:
            return 'mosca1'
        case 2:
            return 'mosca2'
        case 3:
            return 'mosca3'
        default:
            return 'mosca2'
    }
}
function tiraVida(){

}