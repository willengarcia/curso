function start(){
    window.location.replace('http://127.0.0.1:5500/aula010/exe_javascript/desafio/index.html')
    var dificuldade = document.getElementById('nivel').value
    console.log(dificuldade)
}
function aparecerMosca(){
    var altura = window.innerHeight
    var largura = window.innerWidth
    var posicaoX = Math.floor(Math.random() * largura)- 90
    var posicaoY = Math.floor(Math.random() * altura)- 90
    posicaoX = posicaoX <0 ? 0 : posicaoX
    posicaoY = posicaoY <0 ? 0 : posicaoY
    // Criando elemento img
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = 'mosca'
    mosquito.style.left = posicaoX +'px'
    mosquito.style.top = posicaoY +'px'
    document.body.appendChild(mosquito)
}
function muda(p){
    i = 99
    var x = setInterval(function(){
        document.getElementById('time').innerText = i
        i--
        if (i<0){
            clearInterval(x)
        } 
    }, 1000)
}
