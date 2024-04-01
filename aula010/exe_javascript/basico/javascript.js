// document.getElementById('nome').value = 'OI' 
/* Sintaxe de DOM básico: document.getElementBy'propriedades{classes, id..}'('atributo')*/

// Variáveis: instrução 'var'
/* 
    Number: int/float
    boolean: true/false
    string: str/String

    Ele é Case sensitive 
*/
// var tag1 = '<h1>Esse é um teste: </h1>'
// var tag2 = 'Willen'
// Alert serve para abrir um diálogo
// document.write escreve algo na tela no body do html
// console.log aparece na área do console do navegador
// alert(nome_variavel)
// document.write(nome_variavel)
// console.log(nome_variavel)

// Concatenação: +
// var idade = prompt('Digite sua idade: ')
// var entrada =  prompt('Digite seu nome: ')
// document.write('<h1>Esse é um teste de concatenação: '+ entrada+' e eu tenho '+idade+' anos</h1>')

/* Valores null e undefined
    null: intencional
    undefined: não intencional 
*/
// var teste = null
// var teste2
// console.log(teste)
// teste = 'Valor modificado com sucesso'
// console.log(teste)

/* Operadores Relacionais:
    == igual
    === identico (se são iguais e do mesmo tipo)
    != diferente
    !== não identico (são diferentes e de tipos diferentes)
    < menor que 
    > maior que 
    <= menor igual
    >= maior que  
*/
/*
var entrada_01 = prompt('Digite um valor da primeira nota: ')
var entrada_02 = prompt('Digite um valor da segunda nota: ')
var r = (entrada_01 + entrada_02)
console.log(r)
if (r >= 6) {
    document.write('<h3> Você passou: '+r)
} else if (r <=6) {
    document.write('<h3> Você ficou de recuperação: '+r)
} else {
    document.write('<h3> Valor Inválido- : '+r)
}
*/

// Transformação de valores (casting)
// Use parseInt ou parseFloat
// Para string: variavel.toString( )

/*

var entrada_01 = prompt('Digite um valor da primeira nota: ')
var entrada_02 = prompt('Digite um valor da segunda nota: ')

entrada_01 = parseInt(entrada_01)
entrada_02 = parseInt(entrada_02)
var r = (entrada_01 + entrada_02)

if (r >= 6) {
    document.write('<h3> Você passou: '+r)
} else if (r <=6) {
    document.write('<h3> Você ficou de recuperação: '+r)
} else {
    document.write('<h3> Valor Inválido- : '+r)
}
*/
/* Operadores Lógicos:
    E: &&
    OU: ||
    Negação: !
*/

var nota01 = prompt('Digite sua nota: ')
var nota02 = prompt('Digite sua segunda nota: ')
parseInt.nota01
parseInt.nota02
var r = (nota01+nota02)
parseFloat.r
console.log(r, nota01, nota02)
if(r >=10 || r <=7){
    document.write('<h3>Parabéns, você passou, com a média de: '+r+'</h3>')
} else if(r <= 6 || r >=5) {
    document.write('<h3>Você está de recuperação, com a média de: '+r+'</h3>')
} else {
    document.write('<h3>Você foi reprovado, com a média de: '+r+'</h3>')

}
