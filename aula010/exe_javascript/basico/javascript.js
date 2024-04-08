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
*/
// Desafio 180 IMC
/*
var nome = prompt('Digite seu nome: ')
var altura = prompt('Digite sua altura em centimetros: ')
var peso = prompt('Digite seu peso: ')

var a = parseFloat(altura)
var p = parseFloat(peso)

var altura_metros = a/100
var IMC = p / (altura_metros * altura_metros)

if (IMC < 16){
    document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Baixo peso muito grave')
}
else if(IMC >= 16 && IMC <= 16.99){
    document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Baixo peso grave')
}

else if((IMC >= 17) && (IMC <= 18.49)){
    document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Baixo peso')
}
else if((IMC >= 18.50) && (IMC <= 24.99)){
    document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Peso normal')
}
else if((IMC >= 25) && (IMC <= 29.99)){
    document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Sobrepeso')
}
else if((IMC >= 30) && (IMC <= 34.99)){
    document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Sobrepeso grau I')
}

else if((IMC >= 35) && (IMC <= 39.99)){
    document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Sobrepeso grau II')    
}
else if(IMC >= 40){
    document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Obesidade III')    
}
else{
    document.write('Deu errado, IMC: '+IMC)
}
*/
// declarando Funções 
/* 
    O script desconsidera se colocar mais parâmetros
    Se esquecer de colocar o valor de algum parâmetro, ela será Undefined, portanto a saída será NNan
    function nome_funcao(parametros){
        var teste = parametros
        return teste
    }

function imc () {
    var nome = prompt('Digite seu nome: ')
    var altura = prompt('Digite sua altura em centimetros: ')
    var peso = prompt('Digite seu peso: ')

    var a = parseFloat(altura)
    var p = parseFloat(peso)

    var altura_metros = a/100
    var IMC = p / (altura_metros * altura_metros)

    if (IMC < 16){
        document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Baixo peso muito grave')
    }
    else if(IMC >= 16 && IMC <= 16.99){
        document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Baixo peso grave')
    }

    else if((IMC >= 17) && (IMC <= 18.49)){
        document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Baixo peso')
    }
    else if((IMC >= 18.50) && (IMC <= 24.99)){
        document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Peso normal')
    }
    else if((IMC >= 25) && (IMC <= 29.99)){
        document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Sobrepeso')
    }
    else if((IMC >= 30) && (IMC <= 34.99)){
        document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Sobrepeso grau I')
    }

    else if((IMC >= 35) && (IMC <= 39.99)){
        document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Sobrepeso grau II')    
    }
    else if(IMC >= 40){
        document.write(nome+' possui índice de massa corporal igual a '+IMC+', sendo classificado como: Obesidade III')    
    }
    else{
        document.write('Deu errado, IMC: '+IMC)
    }
}
imc()
*/
// Escopos
/*
    Existem 3 tipos de escopo: global, função e bloco
*/

// Funções Calback é funções com parametros chamando outras funções
/* 
    Exemplo
function html(t, c, st){
    document.write('<h1>'+t+'</h1>')
    document.write('<p>'+c+'</p>')
}

function style(h1, p){
    document.write('<style> h1{color:red}</style>')
}
html('Estou muito Feliz', 'Esse é um titulo', style())

function exibirArtigo (id, callbackSucesso, callbackErro) {
    if (true) {
        callbackSucesso('Funções callback em JS', 'Funções de Callback...')
    } else {
        callbackErro('Erro ao recuperar dados')
    }
}
//funções anônimas
var callbackSucesso= function(titulo, descricao){
    document.write('<h1>'+titulo+'</h1>')
    document.write('<p>'+descricao+'</p>')
}
var callbackErro= function(erro){
    document.write('<h1>'+erro+'</h1>')
}
exibirArtigo(1, callbackSucesso('Isso é um teste de Callbak', 'Callback nada mais é que uma função dada como parâmetro'), callbackErro)
*/

// Visitar o w3schooll
// var nome = 'Jorge Sant Ana'
// console.log(nome.length) - Tamanho
// console.log(nome.charAt(2)) -  Retorna o caractere de acordo com o indiíce
// console.log(nome.indexOf('g')) - retorna o indice de acordo com o caractere escolhido
// console.log(nome.replace('Sant Ana', 'Silva')) - Substitui o caractere por outro
// console.log(nome.substring(0,6)) - Pega de um indice ate a outro
// console.log(nome.trim()) - Remove os espaços da extremidades

// Funções Matemáticas
// var x = 10.380 
// console.log(Math.ceil(x)) - Força o arrendodamento para cima
// console.log(Math.floor(x))  -Força o arrendodamento para baixo
// console.log(Math.round(x)) - Ele arredonda automáticamente
// console.log(Math.random(0, 10)) - Mostra um número entre 0 e 1

// Manipulação de Datas

/*
var data = new Date()
// console.log(data.getDate()) - Pega o dia atual
// console.log(data.getMonth() + 1) - Pega o mês atual (0-11)
// console.log(data.getFullYear()) - Pega o ano atual

document.write(data.toString())

document.write('<hr/>')
document.write('<h3>Adicionando e removendo Dias</h3>')
data.setDate(data.getDate()-1) // Calculando dias
document.write(data.toString())
document.write('<hr/>')

document.write('<h3>Adicionando e removendo Mês</h3>')
data.setMonth(data.getMonth()-1) // Calculando mês
document.write(data.toString())
document.write('<hr/>')

document.write('<h3>Adicionando e removendo Ano</h3>')
data.setFullYear(data.getFullYear()+100) // Calculando Ano
document.write(data.toString())
document.write('<hr/>')

//Calculando as Datas
var data1 = new Date(2017, 0, 15)
var data2 = new Date(2017, 1, 23)
document.write('<h3>Calculando dias</h3>')
document.write(data1.toString())
document.write('<br/>')
document.write(data2.toString())
document.write('<hr/>')
// converter para algo que deve ser calculado
document.write(data1.getTime())
document.write('<br/>')
document.write(data2.getTime())
document.write('<hr/>')
// encontrar a qtd de milissegundos entre data1 e data2
document.write(Math.abs(data1.getTime() - data2.getTime()))
// 1 dia > 24h, 1h > 60m, 1m > 60s, 1s > 1000milisegundos
document.write('<h3>1 dia tem: '+ (1*24*60*60*1000)+ ' milissegundos </h3>')
var mili_entre_datas = Math.abs(data1.getTime() - data2.getTime())
var mili_por_dia = 1*24*60*60*1000
var conversao = mili_entre_datas/mili_por_dia
document.write('<h3>Diferenças entre as datas: '+data1+' e '+data2+': '+ Math.ceil(conversao)+ ' dias </h3>')
*/

/*
var num1 = prompt('Digite um numero: ')
var num2 = prompt('Digite outro número: ')
var op = prompt('soma, ou subtração?')
var n1 = parseInt(num1)
var n2 = parseInt(num2)
var func = function(n1, n2, op){
    if ((op == 'soma') || (op == '+')){
        var resultado = n1+n2
        document.write('<h3>O resultado é: </h3>'+resultado)
    } else if((op == 'subtração') || (op == '-')){
        var resultado = n1-n2
        document.write('<h3>O resultado é: </h3>'+resultado)
    }
}
func(n1, n2, op)
*/

