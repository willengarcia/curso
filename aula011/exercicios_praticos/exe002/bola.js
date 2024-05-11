var x = 100
var y = 100
function moverBola(){
    let elemento = document.getElementById('bola').style
    let altura = window.innerHeight - 100
    let largura = window.innerWidth - 100
    elemento.top = Math.floor(Math.random()*altura)+'px'
    elemento.left = Math.floor(Math.random()*largura)+'px'
    var x = 100
    var y = 100
    elemento.width = x-10+'px'
    elemento.height = y-10+'px'
}
