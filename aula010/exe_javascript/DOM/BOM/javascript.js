var janela
function abriPopUp(){
    janela = window.open('https://www.w3schools.com/js/js_window.asp', 'Nova janela', 'width=200, height=200')
}
function fecharPopUp(){
    janela.close()
}
var altura = window.screen.availHeight
var largura = window.screen.availWidth
document.write('<h2>Altura: '+altura+'<br> Largura: '+largura)
var hostname = window.location.href
console.log(hostname)
function novoDocument(){
    window.location.assign('https://www.w3schools.com/js/js_window.asp')
}
// setTimeout > executa uma vez após o tempo informado
// setInterval > sempre executa a ação após o periodo informado (fica em loop)
var i = 5
var x = setInterval(function(){
    document.write('<p>oi</p>')
    i--
    if (i<0){
        document.write('<p>Atualizando página!</p>')
        clearInterval(x) // interrompe o loop
    }
}, 500)
