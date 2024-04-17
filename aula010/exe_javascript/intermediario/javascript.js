// Introdução de Array
/* 
    Array simples sintaxe:
    var lista = Array(); > var lista = []
    lista[1] = "Teste"

    Para acessar: lista['indice']

    Atenção: O lentgh nem sempre condiz com a quantidade que há de elementos dentro do array

    Array multidimensional :
    - São array de arrays

    Sintaxe:
    var lista_pessoas_frutas = Array()
    lista_pessoas_frutas['frutas'] = Array()

    Para acessar: lista['indice_array']['indice]
*/

/* 
    Exclusão e Inclusão dos elementos de Arrays 
    incluir - metodo push (inclui no final)
    incluir - metodo unshift (inclui no inicio)
    exclusao - metodo pop (exclui do final do arry)
    exclusao -  metodo shift (exclui no inicio do array)
*/

/* 
    Pesquisando Elementos dentro do Array
    metodo indexOf: trás o indice com base no valor inserido, se retornar -1 ele não existe
*/

/* 
    Ordenação de Arrays
    metodo .sort() - apenas para palavras
    para retornar numeros, utiliza-se essa função dentro do parametro do metodo sort sem os parenteses:
    function ordenaNumeros(a, b){
        return a -b
    }
*/

/* Exercício de Fixação
var lista =  Array()
function add(){
    var valor = document.getElementById('entrada').value
    if (valor === ""){
        alert('Informe um valor válido')
    } else if(lista.indexOf(valor) != -1){
        alert('obejto já foi adicionado')
    } else { 
        lista.push(valor)
        document.getElementById('entrada').value = ''
        return console.log(lista)
    }
}
function order(){
    return console.log(lista.sort())
}
*/

// Estrutura de Repetição
/* 
    Repetição While
    sintaxe:
    while ('condição') {
        bloco
    }
    para interromper, basta fazer o incremento, ou colocar um if contendo o break

var x = prompt('Digite quantas vezes deve aparecer a mensagem')
var xConver = parseInt(x)
while (xConver<10){
    document.write('<h1>Introdução a Array</h1>')
    xConver++
}
*/

/* 
    Repetição do while
    a execução é feita após a primeira execução do bloco
    para interromper, basta fazer o incremento, ou colocar um if contendo o break
    sintaxe:
    do {
        bloco
    } while('condição')
*/

/*
    Repetição for
    para interromper, basta colocar um if contendo o break
    sintaxe:
    for(variavel; condicao; controle){
        bloco
    }
*/

// Treinando com listas
/*
var lista =  Array()
function add(){
    var valor = document.getElementById('entrada').value
    if (valor === ""){
        alert('Informe um valor válido')
    } else if(lista.indexOf(valor) != -1){
        alert('obejto já foi adicionado')
    } else { 
        lista.push(valor)
        document.getElementById('entrada').value = ''
        return console.log(lista)
    }
}
function order(){
    return console.log(lista.sort())
}
function percorrer(){
    var y = 0 
    for(y; y<lista.length;y++){
        document.write('<h1>'+lista[y]+'</h1>')
        document.write('<br>')
    }
}
*/

/* Laços Encadeados (tabuada)
for(var a = 1; a<=10; a++){
    for(var b = 1; b<=10; b++){
        document.write(a+' x '+b+' = '+(a*b)+'<br>')
    }
    document.write('<hr/>')
}
*/

/* 
    Laço For in
    muito usado em array, para recuperar os indices dos arrays, e com isso recuperar os valores com base no indice, ele é mais funcional
    sintaxe:
    for(variavel x in lista){
        bloco
    }
    var lista = [1,2,3,4,5,6,7,8,9,10]
    for(var x in lista){
        console.log(lista[x])
    }
*/

/*
    Função foreach
    muito usado em array, só que usa mais indices de arrays
    sintaxe:
    var f = function(valor, indice, array){
        comandos
    }
    lista.forEach(f)
*/

// Atividade para Fixação

