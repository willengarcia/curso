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

/*
var nota01 = prompt('Digite sua nota: ')
var nota02 = prompt('Digite sua segunda nota: ')
var n1 = parseFloat(nota01)
var n2 = parseFloat(nota02)
var r = (n1+n2)/2
console.log(r, nota01, nota02)
if(r >=10 || r <=7){
    document.write('<h3>Parabéns, você passou, com a média de: '+r.toFixed(2)+'</h3>')
} else if(r <= 6 || r >=5) {
    document.write('<h3>Você está de recuperação, com a média de: '+r.toFixed(2)+'</h3>')
} else {
    document.write('<h3>Você foi reprovado, com a média de: '+r.toFixed(2)+'</h3>')
}
*/

/* Operador Ternário 
    var teste = (condicao) ? 'verdadeiro' : 'falso'

var n1 = prompt('Digite um número: ')
var nu = parseInt(n1)
var teste = 10 >= nu && 10 <= nu ? document.write('<h1> A condição foi verdadeira!</h1>') : alert('A condição é falsa')
*/

/* DESAFIO IDADE
var entrada01 = prompt('Digite sua idade: ')
var idade = parseInt(entrada01)

if ((idade >= 0)  && (idade < 15)){
    console.log('Criança')
} else if ((idade >= 15) && (idade < 30)){
    console.log('Jovem')
} else if ((idade >= 30) && (idade < 60)){
    console.log('Adulto')
} else {
    console.log('Idoso')
}
*/

/* SWITCH (Caso se), muito usado em menu
    var opcao = 2
    switch(opcao){
        case 1:
            (instrução se a opção for 1)
            break
        case 2:
            (instrução se a opção for 2)
            break
        default:
            (instrução se não for nenhuma das opções)
            break
    }
*/
var opcao = prompt('Digite uma opção: ')
switch (opcao) {
    case 'soma':
        document.write('<h1>Você escolheu a opção: Soma.</h1>')
        var n1 = prompt('Digite o número: ')
        var n2 = prompt('Digite outro número: ')
        var num1 = parseInt(n1)
        var num2 = parseInt(n2)
        var res = num1 + num2
        document.write('<h2>Resultado de: '+num1+'+'+num2+'= '+res+'</h2>')
        break;
    case 'subtrair':
        document.write('<h1>Você escolheu a opção: Soma.</h1>')
        var n1 = prompt('Digite o número: ')
        var n2 = prompt('Digite outro número: ')
        var num1 = parseInt(n1)
        var num2 = parseInt(n2)
        var res = num1 - num2
        document.write('<h2>Resultado de: '+num1+'+'+num2+'= '+res+'</h2>')
        break;
    case 'dividir':
        document.write('<h1>Você escolheu a opção: Soma.</h1>')
        var n1 = prompt('Digite o número: ')
        var n2 = prompt('Digite outro número: ')
        var num1 = parseInt(n1)
        var num2 = parseInt(n2)
        var res = num1 / num2
        document.write('<h2>Resultado de: '+num1+'+'+num2+'= '+res+'</h2>')
        break;
    case 'multiplicar':
        document.write('<h1>Você escolheu a opção: Soma.</h1>')
        var n1 = prompt('Digite o número: ')
        var n2 = prompt('Digite outro número: ')
        var num1 = parseInt(n1)
        var num2 = parseInt(n2)
        var res = num1 * num2
        document.write('<h2>Resultado de: '+num1+'+'+num2+'= '+res+'</h2>')
        break;
    case 'modulo':
        document.write('<h1>Você escolheu a opção: Soma.</h1>')
        var n1 = prompt('Digite o número: ')
        var n2 = prompt('Digite outro número: ')
        var num1 = parseInt(n1)
        var num2 = parseInt(n2)
        var res = num1 % num2
        document.write('<h2>Resultado de: '+num1+'+'+num2+'= '+res+'</h2>')
        break;
    default:
        document.write('<p>Você escolheu uma opção inválida!</p>')
        break;
}